using System.Xml;
using App.Models;
using App.Shared.DTOs;
using App.Shared.Interfaces;
using App.Shared.Utils;
using Microsoft.EntityFrameworkCore.Infrastructure;

namespace App.Shared.Services;

public class CartService : ICartService
{
    private readonly IProductRepository _productRepository;
    private readonly IInvoiceRepository _invoiceRepository;

    public CartService(IProductRepository productRepository, IInvoiceRepository invoiceRepository)
    {
        _productRepository = productRepository;
        _invoiceRepository = invoiceRepository;
    }

    public Invoice MakeInvoice(string orderId, IEnumerable<CartRequest> requests)
    {
        var lines = requests.Select((request, index) =>
            {
                var product = _productRepository.FirstById(request.ProductId);
                var total = request.Quantity * product!.Price;

                return new InvoiceLine
                {
                    Id = -index,
                    ProductId = request.ProductId,
                    Product = product,
                    SizeId = request.SizeId,
                    Quantity = request.Quantity,
                    Price = product.Price,
                    Total = total
                };
            }
        ).ToList();

        var subTotal = lines.Aggregate(0.00, (total, line) => total + line.Total);

        return new Invoice
        {
            OrderId = orderId,
            Lines = lines,
            SubTotal = subTotal,
            Total = subTotal
        };
    }

    public async Task<Invoice> RunTransaction(SalesTransaction transaction)
    {
        var invoice = MakeInvoice(transaction.OrderId!, transaction.Requests!);
        invoice.SetBillingInfo(transaction.BillingInfo);
        return await _invoiceRepository.Save(invoice);
    }
}