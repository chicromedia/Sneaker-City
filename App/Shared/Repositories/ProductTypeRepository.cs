using App.Models;
using App.Shared.Db;
using App.Shared.Interfaces;

namespace App.Shared.Repositories;

public class ProductTypeRepository : IProductTypeRepository
{
    private readonly SqlContext _context;

    public ProductTypeRepository(SqlContext context) => _context = context;

    public ProductType? FirstById(int id)
        => _context.ProductTypes.FirstOrDefault(t => t.Id.Equals(id));

    public IEnumerable<ProductType> Find()
        => _context.ProductTypes;
}