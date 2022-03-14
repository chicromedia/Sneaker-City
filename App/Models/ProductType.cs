using System.ComponentModel;
using System.Text.Json.Serialization;
using App.Shared.Enums;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion.Internal;

namespace App.Models;

public class ProductType
{
    public int Id { get; set; }
    public string? Name { get; set; }
    public string? Guid { get; set; }
    public Available IsAvailable { get; set; }
}