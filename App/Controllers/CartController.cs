using App.Models;
using App.Shared.DTOs;
using App.Shared.Interfaces;
using App.Shared.Utils;
using Microsoft.AspNetCore.Mvc;

namespace App.Controllers;

[ApiController]
[Route("[controller]")]
public class CartController : ControllerBase
{
    private readonly ICartService _service;

    public CartController(ICartService service) => _service = service;

    [HttpPost("review")]
    public ActionResult<Invoice> Review([FromQuery] string? orderId, IList<CartRequest> requests)
        => _service.MakeInvoice((orderId ?? GuidGenerator.NewOrderId())!, requests);

    [HttpPut("checkout")]
    public async Task<ActionResult<Invoice>> Checkout(SalesTransaction transaction)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest();
        }

        return await _service.RunTransaction(transaction);
    }
}