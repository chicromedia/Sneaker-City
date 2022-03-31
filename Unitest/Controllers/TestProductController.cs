using System;
using System.Collections;
using System.Collections.Generic;
using System.Linq;
using App.Controllers;
using App.Models;
using App.Shared.Db;
using App.Shared.Interfaces;
using App.Shared.Repositories;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Moq;
using Xunit;

namespace UniTest.Controllers;

public class TestProductController : TestHandlers
{
    private readonly ProductsController _controller;
    private readonly Mock<SqlContext> _context;

    public TestProductController()
    {
        _context = CreateDbContext<SqlContext>();
        _controller = new ProductsController(new ProductRepository(_context.Object));
    }

    [Fact]
    public void TestGetDetails_ShouldReturnProductByGuid()
    {
        var products = GetFakeListOfProducts();
        _context.Setup(c => c.Products)
            .Returns(CreateDbSetMock(products));

        var response = _controller.GetDetails("air-force-1");

        var result = Assert.IsType<OkObjectResult>(response);
        Assert.NotNull(result.Value);
        Assert.Equal(products[0], result.Value);
        Assert.Equal(StatusCodes.Status200OK, result.StatusCode);
    }

    [Fact]
    public void TestGetDetails_ShouldReturnBadRequestWhenGuidIsEmpty()
    {
        var products = GetFakeListOfProducts();
        _context.Setup(c => c.Products)
            .Returns(CreateDbSetMock(products));

        var response = _controller.GetDetails("");

        var result = Assert.IsType<BadRequestResult>(response);
        Assert.Equal(StatusCodes.Status400BadRequest, result.StatusCode);
    }

    [Fact]
    public void TestGetDetails_ShouldReturnNotFoundWhenThereAreNoProductForGuid()
    {
        var products = GetFakeListOfProducts();
        _context.Setup(c => c.Products)
            .Returns(CreateDbSetMock(products));

        var response = _controller.GetDetails("air-force-196");

        var result = Assert.IsType<NotFoundResult>(response);
        Assert.Equal(StatusCodes.Status404NotFound, result.StatusCode);
    }

    [Fact]
    public void TestGetFeed_ShouldRreturnAllPublishedProducts()
    {
        var products = GetFakeListOfProducts();
        _context.Setup(c => c.Products)
            .Returns(CreateDbSetMock(products));

        var response = _controller.GetFeed();

        var result = Assert.IsType<OkObjectResult>(response);
        Assert.Equal(products.Count, ((result.Value as List<Product>)!).Count);
        Assert.Equal(StatusCodes.Status200OK, result.StatusCode);
    }

    [Fact]
    public void TestGetFeed_ShouldNotReturnContentWhenThereAreNoProducts()
    {
        _context.Setup(c => c.Products)
            .Returns(CreateDbSetMock(new List<Product>()));

        var response = _controller.GetFeed();

        var result = Assert.IsType<NoContentResult>(response);
        Assert.Equal(StatusCodes.Status204NoContent, result.StatusCode);
    }

    [Fact]
    public void TestGetInStock_ShouldReturnAllProductAvailable()
    {
        var products = GetFakeListOfProducts();
        _context.Setup(c => c.Products)
            .Returns(CreateDbSetMock(products));

        var response = _controller.GetInStock();

        var result = Assert.IsType<OkObjectResult>(response);
        Assert.Equal(3, ((result.Value as List<Product>)!).Count);
        Assert.Equal(4, products.Count);
        Assert.Equal(StatusCodes.Status200OK, result.StatusCode);
    }

    [Fact]
    public void TestGetInStock_ShouldNotContentReturnWhenThereAreNoProductsInStock()
    {
        var products = new List<Product>
        {
            new() { Id = 1, Name = "Air Force", PurchaseStartDate = DateTime.Today.AddDays(50) }
        };
        _context.Setup(c => c.Products)
            .Returns(CreateDbSetMock(products));

        var response = _controller.GetInStock();

        var result = Assert.IsType<NoContentResult>(response);
        Assert.Single(products);
        Assert.Equal(StatusCodes.Status204NoContent, result.StatusCode);
    }

    [Fact]
    public void TestGetUpComing_ShouldReturnAllProductsThatAreAwaitingRelease()
    {
        var products = GetFakeListOfProducts();
        _context.Setup(c => c.Products)
            .Returns(CreateDbSetMock(products));

        var response = _controller.GetUpComing();

        var result = Assert.IsType<OkObjectResult>(response);
        Assert.Single((IEnumerable)result.Value!);
        Assert.Equal(4, products.Count);
        Assert.Equal(StatusCodes.Status200OK, result.StatusCode);
    }

    [Fact]
    public void TestGetUpComing_ShouldDoesNotReturnContentWhenThereAreNoProductsPendingRelease()
    {
        var products = new List<Product>
        {
            new() { Id = 1, Name = "Air Force 01", PurchaseStartDate = DateTime.Today.AddDays(-5) },
            new() { Id = 2, Name = "Air Force 02", PurchaseStartDate = DateTime.Today.AddDays(-10) }
        };
        _context.Setup(c => c.Products)
            .Returns(CreateDbSetMock(products));

        var response = _controller.GetUpComing();

        var result = Assert.IsType<NoContentResult>(response);
        Assert.Equal(2, products.Count);
        Assert.Equal(StatusCodes.Status204NoContent, result.StatusCode);
    }
}