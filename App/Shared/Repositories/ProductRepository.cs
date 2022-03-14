using System.Linq;
using App.Models;
using App.Shared.Db;
using App.Shared.Enums;
using App.Shared.Interfaces;
using Microsoft.EntityFrameworkCore;

namespace App.Shared.Repositories;

public class ProductRepository : IProductRepository
{
    private readonly SqlContext _context;

    public ProductRepository(SqlContext context)
        => _context = context;

    public Product? FirstByGuid(string guid)
        => _context.Products
            .Include(p => p.Images)
            .Include(p => p.Type)
            .FirstOrDefault(p => p!.Guid == guid);

    public IEnumerable<Product> Find() =>
        _context.Products
            .Include(p => p.Images!.Where(i => i.Featured == Available.Yes))
            .Include(p => p.Type)
            .OrderByDescending(p => p.Created);

    public IEnumerable<Product> FindInStock()
        => _context.Products
            .Include(p => p.Images!.Where(i => i.Featured == Available.Yes))
            .Include(p => p.Type)
            .Where(p => p.InStock == Available.Yes)
            .OrderByDescending(p => p.Created);

    public IEnumerable<Product> FindUpComing()
        => _context.Products
            .Include(p => p.Images!.Where(i => i.Featured == Available.Yes))
            .Where(p => p.Created < DateTime.Now)
            .OrderByDescending(p => p.Created);
}