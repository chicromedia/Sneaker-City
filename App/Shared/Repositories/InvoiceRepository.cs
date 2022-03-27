using App.Models;
using App.Shared.Db;
using App.Shared.Interfaces;

namespace App.Shared.Repositories;

public class InvoiceRepository : IInvoiceRepository
{
    private readonly SqlContext _context;

    public InvoiceRepository(SqlContext context) => _context = context;

    public Invoice? FirstById(int id)
        => _context.Invoices.FirstOrDefault(t => t.Id.Equals(id));

    public IEnumerable<Invoice> Find()
        => _context.Invoices;

    public async Task<Invoice> Save(Invoice invoice)
    {
        var entity = _context.Invoices.Add(invoice);
        await _context.SaveChangesAsync();
        return entity.Entity;
    }
}