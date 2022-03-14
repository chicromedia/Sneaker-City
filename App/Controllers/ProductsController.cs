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
    public ActionResult<Product> GetDetails(string guid)
    {
        if (string.IsNullOrEmpty(guid))
            return BadRequest();

        var product = _repository.FirstByGuid(guid);
        return product != null ? Ok(product) : NotFound();
    }

    [HttpGet("feed")]
    public ActionResult<Product[]> GetFeed()
    {
        return _repository.Find().ToArray();
    }

    [HttpGet("in-stock")]
    public ActionResult<Product[]> GetInStock()
    {
        return _repository.FindInStock().ToArray();
    }

    [HttpGet("up-coming")]
    public ActionResult<Product[]> GetUpComing()
    {
        return _repository.FindUpComing().ToArray();
    }
}