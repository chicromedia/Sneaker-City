using App.Shared.Interfaces;

namespace App.Shared.DTOs;

public class SalesTransaction
{
    public string? OrderId { get; set; }
    public BillingInfo? BillingInfo { get; set; }
    public CreditCard? Card { get; set; }
    public IList<CartRequest>? Requests { get; set; }
}