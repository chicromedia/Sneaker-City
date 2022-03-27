import { InvoiceLine } from "./invoice-line";

export interface Invoice
{
  orderId: string;
  subTotal: number;
  total: number;
  lines: InvoiceLine[];
}
