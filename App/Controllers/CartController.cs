using App.Models;
using App.Shared.Interfaces;
using Microsoft.AspNetCore.Mvc;

namespace App.Controllers;

[ApiController]
[Route("[controller]")]
public class CartController : ControllerBase
{
    private readonly ICartService _service;

    public CartController(ICartService service) => _service = service;

    [HttpPost("review")]
    public ActionResult<Invoice> Review(IList<CartRequest> requests)
        => _service.BuildReview(requests);
}