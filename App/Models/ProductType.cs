using App.Shared.Enums;

namespace App.Models;

public class ProductType
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public string? Guid { get; set; }
    public Available IsAvailable { get; set; }
}