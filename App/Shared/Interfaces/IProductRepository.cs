using App.Models;
using Microsoft.AspNetCore.Mvc;

namespace App.Shared.Interfaces;

public interface IProductRepository
{
    Product? FirstByGuid(string guid);

    IList<Product> Find();

    IList<Product> FindInStock();

    IList<Product> FindUpComing();
    Product? FirstById(int id);
}