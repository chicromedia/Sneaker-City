using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using App.Shared.Enums;

namespace App.Models;

public class Image
{
    [Key]
    [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
    public Guid Id { get; set; } = Guid.NewGuid();

    public string? Name { get; set; }
    public string? Path { get; set; }
    public float Size { get; set; }
    public int ProductId { get; set; }
    public Available Featured { get; set; }
}