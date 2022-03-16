using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace App.Models;

public class Invoice
{
    [Key] public int Id { get; set; }
    public int CustomerId { get; set; }
    public string? BillingName { get; set; }
    public string? BillingEmail { get; set; }
    public string? BillingPhone { get; set; }
    public string? BillingAddress { get; set; }
    public double SubTotal { get; set; }
    [JsonIgnore] public int TaxId { get; set; }
    public double Tax { get; set; }
    public double Total { get; set; }

    public IEnumerable<InvoiceLine>? Lines { get; set; }
}