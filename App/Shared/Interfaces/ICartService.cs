using App.Models;

namespace App.Shared.Interfaces;

public interface ICartService
{
    Invoice BuildReview(IEnumerable<CartRequest> requests);
}