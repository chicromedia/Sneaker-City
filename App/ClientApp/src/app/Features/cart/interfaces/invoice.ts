import { InvoiceLine } from "./invoice-line";

export interface Invoice
{
  subTotal: number;
  total: number;
  lines: InvoiceLine[];
}
