using System.Collections.Generic;
using App.Controllers;
using App.Models;
using App.Shared.DTOs;
using App.Shared.Interfaces;
using App.Shared.Utils;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Moq;
using Xunit;

namespace UniTest.Controllers;

public class TestCartController : TestHandlers
{
    private readonly CartController _controller;
    private readonly IList<CartRequest> _requests;
    private readonly Mock<ICartService> _service;

    public TestCartController()
    {
        _service = new Mock<ICartService>();
        _controller = new CartController(_service.Object);
        _requests = new List<CartRequest>();
    }

    [Fact]
    public void TestReview_ShouldReturnInvoiceFromCartRequests()
    {
        var invoice = new Invoice { OrderId = GuidGenerator.NewOrderId() };
        _service.Setup(s => s.MakeInvoice(invoice.OrderId, _requests))
            .Returns(invoice);

        var response = _controller.Review(invoice.OrderId, _requests);

        var result = Assert.IsType<OkObjectResult>(response);
        Assert.NotNull(result.Value);
        Assert.Equal(invoice.OrderId, (result.Value as Invoice)?.OrderId);
        Assert.Equal(StatusCodes.Status200OK, result.StatusCode);
    }

    [Fact]
    public void TestCheckout_ShouldCreateAndReturnInvoiceFromSalesTransaction()
    {
        var transaction = GetFakeSalesTransaction(_requests);
        var invoice = new Invoice { Id = 1, OrderId = transaction.OrderId };
        _service.Setup(s => s.RunTransaction(transaction))
            .ReturnsAsync(invoice);

        var response = _controller.Checkout(transaction);

        var result = Assert.IsType<OkObjectResult>(response.Result);
        Assert.NotNull(result.Value);
        Assert.Equal(invoice.Id, (result.Value as Invoice)?.Id);
        Assert.Equal(transaction.OrderId, (result.Value as Invoice)?.OrderId);
        Assert.Equal(StatusCodes.Status200OK, result.StatusCode);
    }
}