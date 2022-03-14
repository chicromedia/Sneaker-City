using App.Models;
using Microsoft.AspNetCore.Mvc;

namespace App.Shared.Interfaces;

public interface IProductRepository
{
    Product? FirstByGuid(string guid);

    IEnumerable<Product> Find();

    IEnumerable<Product> FindInStock();

    IEnumerable<Product> FindUpComing();
}