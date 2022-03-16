using App.Models;
using App.Shared.Interfaces;

namespace App.Shared.Services;

public class CartService : ICartService
{
    private readonly IProductRepository _repository;

    public CartService(IProductRepository repository) => _repository = repository;

    public Invoice BuildReview(IEnumerable<CartRequest> requests)
    {
        var lines = requests.Select((request, index) =>
            new InvoiceLine
            {
                Id = -index,
                ProductId = request.ProductId,
                Product = _repository.FirstById(request.ProductId),
                SizeId = request.SizeId,
                Quantity = request.Quantity
            }
        ).ToList();

        var subTotal = lines.Aggregate(0.00, (total, line)
            => total + (line.Quantity * line.Product!.Price)
        );

        return new Invoice
        {
            CustomerId = 1,
            BillingName = "Ulises Familia",
            BillingEmail = "chicromedia@hotmail.com",
            BillingPhone = "8091234567",
            Tax = 0,
            Lines = lines,
            SubTotal = subTotal,
            Total = subTotal
        };
    }
}