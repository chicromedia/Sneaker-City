using App.Models;
using Microsoft.AspNetCore.Mvc;

namespace App.Shared.Interfaces;

public interface IInvoiceRepository
{
    IEnumerable<Invoice> Find();

    Invoice? FirstById(int id);
    Task<Invoice> Save(Invoice invoice);
}