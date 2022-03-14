using App.Models;
using App.Shared.Enums;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Internal;
using Microsoft.EntityFrameworkCore.Metadata.Internal;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;

namespace App.Shared.Db;

public sealed class SqlContext : DbContext
{
    public DbSet<Product> Products { get; set; } = null!;
    public DbSet<ProductType> ProductTypes { get; set; } = null!;

    public SqlContext(DbContextOptions<SqlContext> options) : base(options)
    {
        Database.EnsureCreated();
    }

    protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<ProductType>().HasData(
            new ProductType { Id = 1, Name = "Air Jordan 12", IsAvailable = Available.Yes },
            new ProductType { Id = 2, Name = "Air Jordan 13", IsAvailable = Available.Yes },
            new ProductType { Id = 3, Name = "Air Trainer 1", IsAvailable = Available.Yes },
            new ProductType { Id = 4, Name = "Women's Dunk Low", IsAvailable = Available.Yes },
            new ProductType { Id = 5, Name = "Air Max 95", IsAvailable = Available.Yes },
            new ProductType { Id = 6, Name = "Nike Air Max", IsAvailable = Available.Yes },
            new ProductType { Id = 7, Name = "SKNRS Live", IsAvailable = Available.Yes },
            new ProductType { Id = 8, Name = "Concepts x Air Max 1", IsAvailable = Available.Yes },
            new ProductType { Id = 9, Name = "Women's Air Huarache", IsAvailable = Available.Yes }
        );

        modelBuilder.Entity<Image>().HasData(
            new Image { ProductId = 1, Path = "ba9489af-541f-4e5f-9a87-fe4373ec9095/this-week-in-snkrs-3-13-3-19.jpg", Featured = Available.Yes },
            new Image { ProductId = 2, Path = "6ae257e1-e6a4-472a-bfb5-ba437d990f12/air-more-uptempo-96-trading-cards-release-date.jpg", Featured = Available.Yes },
            new Image { ProductId = 3, Path = "8344268f-e490-46d9-8c6b-77c7569af32b/air-jordan-13-del-sol-414571-167-release-date.jpg", Featured = Available.Yes },
            new Image { ProductId = 4, Path = "9bba7778-8deb-4682-bf92-ee2e7874144e/air-trainer-1-dark-smoke-grey-dh7338-001-release-date.jpg", Featured = Available.Yes },
            new Image { ProductId = 5, Path = "7c0a129e-0ff1-4cc1-b09d-0f6cfe38b8cf/nike-air-max-furyosa-dh0531-100-release-date.jpg", Featured = Available.Yes },
            new Image { ProductId = 6, Path = "91eb1f0a-1231-4d5e-955c-50de2d611418/air-max-95-se-air-max-running-club-dh2718-001-release-date.jpg", Featured = Available.Yes },
            new Image { ProductId = 7, Path = "93bd4dee-abe4-438e-a0cf-62888b8e3aae/air-max-95-air-max-running-club-dh2718-400-release-date.jpg", Featured = Available.Yes },
            new Image { ProductId = 8, Path = "c5cbbfc6-de83-42ee-9784-e2d25292cacf/air-huarache-university-gold-and-pink-dd1068-003-release-date.jpg", Featured = Available.Yes },
            new Image { ProductId = 9, Path = "675d6a86-c884-4279-aabb-fb6081b36aa1/air-jordan-6-retro-low-768878-102-release-date.jpg", Featured = Available.Yes },
            new Image { ProductId = 10, Path = "338fa63c-1898-4bce-beb9-4c80c92ea2cf/air-force-1-off-noir-dq8571-001-release-date.jpg", Featured = Available.Yes }
        );

        modelBuilder.Entity<Product>().HasData(
            new Product { Id = 1, Name = "Playoffs", ProductTypeId = 1, InStock = Available.Yes },
            new Product { Id = 2, Name = "Del Sol", ProductTypeId = 2 },
            new Product { Id = 3, Name = "Dark Smoke Grey", ProductTypeId = 3, InStock = Available.Yes },
            new Product { Id = 4, Name = "Vintage Green", ProductTypeId = 4, InStock = Available.Yes },
            new Product { Id = 5, Name = "Matte Olive", ProductTypeId = 5, InStock = Available.No },
            new Product { Id = 6, Name = "Furyosa", ProductTypeId = 6, InStock = Available.No },
            new Product { Id = 7, Name = "Air Max Sleepers", ProductTypeId = 7, InStock = Available.Yes },
            new Product { Id = 8, Name = "Mellow", ProductTypeId = 8, InStock = Available.Yes },
            new Product { Id = 9, Name = "Air Max Running Club", ProductTypeId = 5, InStock = Available.Yes },
            new Product { Id = 10, Name = "WM", ProductTypeId = 5, InStock = Available.Yes }
        );

        modelBuilder.Entity<Product>()
            .HasMany(p => p.Images)
            .WithOne()
            .HasForeignKey(i => i.ProductId);

        modelBuilder.Entity<Product>()
            .Property(p => p.Guid)
            .ValueGeneratedOnAdd()
            .HasValueGenerator<FriendlyUrlGenerator>();

        base.OnModelCreating(modelBuilder);
    }
}