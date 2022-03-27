import { InvoiceLine } from "./invoice-line";

export class Invoice
{
  public id: number;
  public orderId: string;
  public billingName: string;
  public billingEmail: string;
  public billingPhone: string;
  public billingAddress: string;
  public subTotal: number;
  public shipping: number;
  public tax: number;
  public total: number;
  public lines: InvoiceLine[];

  constructor( props: Partial<Invoice> = {} )
  {
    Object.assign( this, props );
  }
}
