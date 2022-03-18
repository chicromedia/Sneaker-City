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
            {
                var product = _repository.FirstById(request.ProductId);
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