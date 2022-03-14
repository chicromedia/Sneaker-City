using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;
using App.Shared.Enums;

namespace App.Models;

public class Product
{
    [Key] public int Id { get; set; }
    public string? Name { get; set; }
    public string? Guid { get; set; }
    public int ProductTypeId { get; set; }
    public Available InStock { get; set; }
    public DateTime Created { get; set; }
    public DateTime PurchaseStartDate { get; set; }
    public DateTime PurchaseEndDate { get; set; }
    public ProductType? Type { get; set; }
    public ICollection<Image>? Images { get; set; }
}