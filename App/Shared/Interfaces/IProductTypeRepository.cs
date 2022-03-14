using App.Models;

namespace App.Shared.Interfaces;

public interface IProductTypeRepository
{
    ProductType? FirstById(int id);

    IEnumerable<ProductType> Find();
}