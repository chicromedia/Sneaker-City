using App.Models;
using App.Shared.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace App.Controllers;

[ApiController]
[Route("[controller]")]
public class ProductsController : ControllerBase
{
    private readonly IProductRepository _repository;

    public ProductsController(IProductRepository repository) => _repository = repository;

    [HttpGet("details/{guid}")]
    public IActionResult GetDetails(string guid)
    {
        if (string.IsNullOrEmpty(guid))
            return BadRequest();

        var product = _repository.FirstByGuid(guid);
        return product != null ? Ok(product) : NotFound();
    }

    [HttpGet("feed")]
    public IActionResult GetFeed()
    {
        var products = _repository.Find();

        return products.Count > 0
            ? Ok(products)
            : NoContent();
    }

    [HttpGet("in-stock")]
    public IActionResult GetInStock()
    {
        var products = _repository.FindInStock();

        return products.Count > 0
            ? Ok(products)
            : NoContent();
    }

    [HttpGet("up-coming")]
    public IActionResult GetUpComing()
    {
        var products = _repository.FindUpComing();

        return products.Count > 0
            ? Ok(products)
            : NoContent();
    }
}