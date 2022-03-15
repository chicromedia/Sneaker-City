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
            .Include(p => p.Sizes!.OrderBy(s => s.Id))
            .AsEnumerable()
            .Select(p =>
            {
                p.InStock = DateTime.Today >= p.PurchaseStartDate && DateTime.Today <= p.PurchaseEndDate;
                return p;
            })
            .FirstOrDefault(p => p!.Guid == guid);
    
    public IEnumerable<Product> Find() =>
        _context.Products
            .Include(p => p.Images!.Where(i => i.Featured == Available.Yes))
            .Include(p => p.Type)
            .OrderByDescending(p => p.PurchaseStartDate)
            .Take(10)
            .AsEnumerable()
            .Select(p =>
            {
                p.InStock = DateTime.Today >= p.PurchaseStartDate && DateTime.Today <= p.PurchaseEndDate;
                return p;
            });

    public IEnumerable<Product> FindInStock()
        => _context.Products
            .Include(p => p.Images!.Where(i => i.Featured == Available.Yes))
            .Include(p => p.Type)
            .Where(p => DateTime.Today >= p.PurchaseStartDate && DateTime.Today <= p.PurchaseEndDate)
            .OrderByDescending(p => p.PurchaseStartDate)
            .Take(10)
            .AsEnumerable()
            .Select(p =>
            {
                p.InStock = true;
                return p;
            });

    public IEnumerable<Product> FindUpComing()
        => _context.Products
            .Include(p => p.Images!.Where(i => i.Featured == Available.Yes))
            .Include(p => p.Type)
            .Where(p => DateTime.Today < p.PurchaseStartDate)
            .OrderByDescending(p => p.PurchaseStartDate)
            .Take(10);
}