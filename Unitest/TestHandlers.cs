using System;
using System.Collections.Generic;
using System.Linq;
using App.Models;
using App.Shared.Db;
using App.Shared.DTOs;
using App.Shared.Utils;
using Microsoft.EntityFrameworkCore;
using Moq;

namespace UniTest;

public abstract class TestHandlers
{
    protected static Mock<T> CreateDbContext<T>() where T : SqlContext
    {
        var options = new DbContextOptionsBuilder<T>()
            .UseInMemoryDatabase(databaseName: "FakeDbTest")
            .Options;
        return new Mock<T>(options);
    }

    protected static DbSet<T> CreateDbSetMock<T>(IEnumerable<T> elements) where T : class
    {
        var elementsAsQueryable = elements.AsQueryable();
        var dbSetMock = new Mock<DbSet<T>>();

        dbSetMock.As<IQueryable<T>>().Setup(m => m.Provider).Returns(elementsAsQueryable.Provider);
        dbSetMock.As<IQueryable<T>>().Setup(m => m.Expression).Returns(elementsAsQueryable.Expression);
        dbSetMock.As<IQueryable<T>>().Setup(m => m.ElementType).Returns(elementsAsQueryable.ElementType);
        dbSetMock.As<IQueryable<T>>().Setup(m => m.GetEnumerator()).Returns(elementsAsQueryable.GetEnumerator());

        return dbSetMock.Object;
    }

    protected static IList<Product> GetFakeListOfProducts()
    {
        return new List<Product>
        {
            new() { Id = 1, Guid = "air-force-1", Name = "Air Force 1", PurchaseStartDate = DateTime.Today.AddDays(-15), Price = 100 },
            new() { Id = 2, Guid = "air-force-2", Name = "Air Force 2", PurchaseStartDate = DateTime.Today.AddDays(-10), Price = 450 },
            new() { Id = 3, Guid = "air-force-3", Name = "Air Force 3", PurchaseStartDate = DateTime.Today.AddDays(-5), Price = 500 },
            new() { Id = 4, Guid = "air-force-4", Name = "Air Force 4", PurchaseStartDate = DateTime.Today.AddDays(20), Price = 50 }
        };
    }

    protected static SalesTransaction GetFakeSalesTransaction(IList<CartRequest> requests)
    {
        return new SalesTransaction
        {
            OrderId = GuidGenerator.NewOrderId(),
            BillingInfo = new BillingInfo
            {
                FirstName = "Ulises",
                LastName = "Familia",
                Email = "chicromeda@hotmail.com",
                Phone = "8091234567"
            },
            Card = new CreditCard
            {
                Number = "4111111111111111",
                Expire = "10/30",
                SecureCode = "123"
            },
            Requests = requests
        };
    }
}