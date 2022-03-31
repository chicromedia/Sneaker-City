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
    public IActionResult Review([FromQuery] string? orderId, IList<CartRequest> requests)
        => Ok(_service.MakeInvoice((orderId ?? GuidGenerator.NewOrderId())!, requests));

    [HttpPut("checkout")]
    public async Task<IActionResult> Checkout(SalesTransaction transaction)
    {
        if (!ModelState.IsValid)
        {
            return BadRequest();
        }

        var invoice = await _service.RunTransaction(transaction);
        return Ok(invoice);
    }
}