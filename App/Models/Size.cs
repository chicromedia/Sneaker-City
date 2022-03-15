using System.ComponentModel.DataAnnotations;
using System.Text.Json.Serialization;

namespace App.Models;

public class Size
{
    [Key] public int Id { get; set; }
    public string? Name { get; set; }
    public int Stock { get; set; }
    public DateTime Created { get; set; }
    [JsonIgnore] public virtual IEnumerable<Product>? Products { get; set; }
}