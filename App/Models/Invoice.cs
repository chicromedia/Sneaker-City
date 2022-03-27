using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;
using App.Shared.DTOs;

namespace App.Models;

public class Invoice
{
    [Key] public int Id { get; set; }
    public string? OrderId { get; set; }
    public int CustomerId { get; set; }
    public string? BillingName { get; set; }
    public string? BillingEmail { get; set; }
    public string? BillingPhone { get; set; }
    public string? BillingAddress { get; set; }
    public double SubTotal { get; set; }
    public double Tax { get; set; }
    public double Total { get; set; }

    public IEnumerable<InvoiceLine>? Lines { get; set; }

    public void SetBillingInfo(BillingInfo? billingInfo)
    {
        if (billingInfo == null) return;

        BillingName = $"{billingInfo.FirstName} {billingInfo.LastName}";
        BillingAddress = billingInfo.Address;
        BillingEmail = billingInfo.Email;
        BillingPhone = billingInfo.Phone;
    }
}