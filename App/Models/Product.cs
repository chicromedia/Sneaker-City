using System.ComponentModel.DataAnnotations;

namespace App.Models;

public class Product
{
    [Key] public int Id { get; set; }
    public string? Name { get; set; }
    public string? Guid { get; set; }
    public string? Description { get; set; }
    public int ProductTypeId { get; set; }
    public DateTime Created { get; set; } = DateTime.Now;
    public DateTime PurchaseStartDate { get; set; }
    public DateTime PurchaseEndDate { get; set; } = DateTime.Today.AddDays(20);
    public ProductType? Type { get; set; }
    public ICollection<Image>? Images { get; set; }
    public ICollection<Size>? Sizes { get; set; }
    public bool InStock { get; set; } = false;
    public double Price { get; set; }
}