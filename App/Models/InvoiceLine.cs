using System.ComponentModel.DataAnnotations;

namespace App.Models;

public class InvoiceLine
{
    [Key] public int Id { get; set; }
    public int InvoiceId { get; set; }
    public int ProductId { get; set; }
    public int SizeId { get; set; }
    public int Quantity { get; set; }
    public double Price { get; set; }
    public double Total { get; set; }
    public Product? Product { get; set; }
    public Invoice? Invoice { get; set; }
}