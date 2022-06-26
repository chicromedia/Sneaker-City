using Microsoft.AspNetCore.Mvc;

namespace App.Controllers;

[ApiController]
[Route("[controller]")]
public class ProductsController : ControllerBase
{
    public ProductsController()
    {
    }

    [HttpGet]
    public IActionResult Get()
    {
        return Ok("");
    }
}