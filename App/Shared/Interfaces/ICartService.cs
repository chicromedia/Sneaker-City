using App.Models;
using App.Shared.DTOs;

namespace App.Shared.Interfaces;

public interface ICartService
{
    Invoice MakeInvoice(string orderId, IEnumerable<CartRequest> requests);
    Task<Invoice> RunTransaction(SalesTransaction transaction);
}