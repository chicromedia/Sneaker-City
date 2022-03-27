using App.Models;
using App.Shared.Enums;
using Microsoft.EntityFrameworkCore;

namespace App.Shared.Db;

public sealed class SqlContext : DbContext
{
    public DbSet<Product> Products { get; set; } = null!;
    public DbSet<ProductType> ProductTypes { get; set; } = null!;
    public DbSet<Invoice> Invoices { get; set; } = null!;

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
            new Image { ProductId = 1, Path = "c8e05f51-91b5-4f75-a8d5-7e0b3483b36d/air-max-terrascape-plus-sail-and-sea-glass-dc6078-100-release-date.jpg", Featured = Available.No },
            new Image { ProductId = 1, Path = "e4dd4b00-bb85-4159-9da9-ee4dce7005e8/air-max-terrascape-plus-sail-and-sea-glass-dc6078-100-release-date.jpg", Featured = Available.No },
            new Image { ProductId = 2, Path = "6ae257e1-e6a4-472a-bfb5-ba437d990f12/air-more-uptempo-96-trading-cards-release-date.jpg", Featured = Available.Yes },
            new Image { ProductId = 2, Path = "8344268f-e490-46d9-8c6b-77c7569af32b/air-jordan-13-del-sol-414571-167-release-date.jpg", Featured = Available.No },
            new Image { ProductId = 2, Path = "047be861-f373-475f-aac8-123ca59e8823/air-jordan-13-del-sol-414571-167-release-date.jpg", Featured = Available.No },
            new Image { ProductId = 3, Path = "8344268f-e490-46d9-8c6b-77c7569af32b/air-jordan-13-del-sol-414571-167-release-date.jpg", Featured = Available.Yes },
            new Image { ProductId = 3, Path = "38604548-20f8-4aa0-9e4f-d13d5277fabc/air-more-uptempo-96-trading-cards-release-date.jpg", Featured = Available.No },
            new Image { ProductId = 3, Path = "851482d7-2aa7-4f48-8c6d-24ba3f033497/air-more-uptempo-96-trading-cards-release-date.jpg", Featured = Available.No },
            new Image { ProductId = 4, Path = "9bba7778-8deb-4682-bf92-ee2e7874144e/air-trainer-1-dark-smoke-grey-dh7338-001-release-date.jpg", Featured = Available.Yes },
            new Image { ProductId = 4, Path = "bc921490-8f56-4a14-8d38-5df8cc8af6d9/air-max-90-familia-release-date.jpg", Featured = Available.No },
            new Image { ProductId = 4, Path = "f67189df-d2e0-4f98-b383-ecd8bc99ecca/air-max-90-familia-release-date.jpg", Featured = Available.No },
            new Image { ProductId = 4, Path = "9505f951-fbba-40e3-958c-27cfc5c9a016/air-max-90-familia-release-date.jpg", Featured = Available.No },
            new Image { ProductId = 5, Path = "7c0a129e-0ff1-4cc1-b09d-0f6cfe38b8cf/nike-air-max-furyosa-dh0531-100-release-date.jpg", Featured = Available.Yes },
            new Image { ProductId = 5, Path = "bde98c07-5d60-4629-a8bc-03eb2c9880e6/women-s-air-jordan-og-release-date.jpg", Featured = Available.No },
            new Image { ProductId = 6, Path = "ca61e76f-6768-4e0a-b9e8-9ca1f8dc73de/women-s-air-jordan-og-release-date.jpg", Featured = Available.Yes },
            new Image { ProductId = 6, Path = "ca61e76f-6768-4e0a-b9e8-9ca1f8dc73de/women-s-air-jordan-og-release-date.jpg", Featured = Available.No },
            new Image { ProductId = 7, Path = "93bd4dee-abe4-438e-a0cf-62888b8e3aae/air-max-95-air-max-running-club-dh2718-400-release-date.jpg", Featured = Available.Yes },
            new Image { ProductId = 8, Path = "c5cbbfc6-de83-42ee-9784-e2d25292cacf/air-huarache-university-gold-and-pink-dd1068-003-release-date.jpg", Featured = Available.Yes },
            new Image { ProductId = 9, Path = "675d6a86-c884-4279-aabb-fb6081b36aa1/air-jordan-6-retro-low-768878-102-release-date.jpg", Featured = Available.Yes },
            new Image { ProductId = 10, Path = "338fa63c-1898-4bce-beb9-4c80c92ea2cf/air-force-1-off-noir-dq8571-001-release-date.jpg", Featured = Available.Yes },
            new Image { ProductId = 10, Path = "7ce70525-b3fa-4157-8f5b-2270ed0b1557/women-s-air-jordan-og-release-date.jpg", Featured = Available.No }
        );

        modelBuilder.Entity<Product>().HasData(
            new Product { Id = 1, Name = "Playoffs", ProductTypeId = 1, PurchaseStartDate = DateTime.Today.AddDays(-15), Price = 185 },
            new Product { Id = 2, Name = "Del Sol", ProductTypeId = 2, PurchaseStartDate = DateTime.Today.AddDays(-15), Price = 250 },
            new Product { Id = 3, Name = "Dark Smoke Grey", ProductTypeId = 3, PurchaseStartDate = DateTime.Today.AddDays(-10), Price = 110 },
            new Product { Id = 4, Name = "Vintage Green", ProductTypeId = 4, PurchaseStartDate = DateTime.Today.AddDays(-5), Price = 190 },
            new Product { Id = 5, Name = "Matte Olive", ProductTypeId = 5, PurchaseStartDate = DateTime.Today.AddDays(5), Price = 300 },
            new Product { Id = 6, Name = "Furyosa", ProductTypeId = 6, PurchaseStartDate = DateTime.Today.AddDays(20), Price = 450 },
            new Product { Id = 7, Name = "Air Max Sleepers", ProductTypeId = 7, PurchaseStartDate = DateTime.Today.AddDays(-1), Price = 125 },
            new Product { Id = 8, Name = "Mellow", ProductTypeId = 8, PurchaseStartDate = DateTime.Today.AddDays(-1), Price = 450 },
            new Product { Id = 9, Name = "Air Max Running Club", PurchaseStartDate = DateTime.Today.AddDays(-1), Price = 775 },
            new Product { Id = 10, Name = "WM", ProductTypeId = 5, PurchaseStartDate = DateTime.Today.AddDays(-1), Price = 620 }
        );

        modelBuilder.Entity<Size>().HasData(
            new Size { Id = 1, Name = "M 3.5 / W 5", Stock = 10 },
            new Size { Id = 2, Name = "M 4 / W 5.5", Stock = 10 },
            new Size { Id = 3, Name = "M 4.5 / W 6", Stock = 0 },
            new Size { Id = 4, Name = "M 5 / W 6.5", Stock = 0 },
            new Size { Id = 5, Name = "M 5.5 / W 7", Stock = 0 },
            new Size { Id = 6, Name = "M 6 / W 7.5", Stock = 50 },
            new Size { Id = 7, Name = "M 6.5 / W 8", Stock = 40 },
            new Size { Id = 8, Name = "M 7 / W 8.5", Stock = 15 },
            new Size { Id = 9, Name = "M 7.5 / W 9", Stock = 15 }
        );

        modelBuilder.Entity<Product>()
            .HasMany(p => p.Images)
            .WithOne()
            .HasForeignKey(i => i.ProductId);

        modelBuilder.Entity<Product>()
            .HasMany(p => p.Sizes)
            .WithMany(s => s.Products)
            .UsingEntity(j => j
                .HasData(
                    new { ProductsId = 1, SizesId = 1 },
                    new { ProductsId = 1, SizesId = 2 },
                    new { ProductsId = 2, SizesId = 3 },
                    new { ProductsId = 2, SizesId = 1 },
                    new { ProductsId = 3, SizesId = 5 },
                    new { ProductsId = 3, SizesId = 7 },
                    new { ProductsId = 3, SizesId = 9 },
                    new { ProductsId = 4, SizesId = 1 },
                    new { ProductsId = 4, SizesId = 3 },
                    new { ProductsId = 4, SizesId = 4 },
                    new { ProductsId = 4, SizesId = 5 },
                    new { ProductsId = 5, SizesId = 7 },
                    new { ProductsId = 5, SizesId = 8 },
                    new { ProductsId = 6, SizesId = 2 },
                    new { ProductsId = 6, SizesId = 8 },
                    new { ProductsId = 6, SizesId = 9 },
                    new { ProductsId = 7, SizesId = 1 },
                    new { ProductsId = 7, SizesId = 3 },
                    new { ProductsId = 7, SizesId = 2 },
                    new { ProductsId = 8, SizesId = 8 },
                    new { ProductsId = 8, SizesId = 9 },
                    new { ProductsId = 8, SizesId = 7 },
                    new { ProductsId = 9, SizesId = 3 },
                    new { ProductsId = 9, SizesId = 2 },
                    new { ProductsId = 9, SizesId = 7 },
                    new { ProductsId = 10, SizesId = 5 },
                    new { ProductsId = 10, SizesId = 6 },
                    new { ProductsId = 10, SizesId = 9 }
                )
            );

        modelBuilder.Entity<Product>()
            .Property(p => p.Guid)
            .ValueGeneratedOnAdd()
            .HasValueGenerator<FriendlyUrlGenerator>();

        modelBuilder.Entity<Product>()
            .HasMany(p => p.Lines)
            .WithOne(l => l.Product)
            .HasForeignKey(l => l.ProductId);

        modelBuilder.Entity<Invoice>()
            .HasMany(i => i.Lines)
            .WithOne(l => l.Invoice)
            .HasForeignKey(l => l.InvoiceId);

        base.OnModelCreating(modelBuilder);
    }
}