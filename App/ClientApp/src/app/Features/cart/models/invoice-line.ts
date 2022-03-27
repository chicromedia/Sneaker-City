import { ISize } from "../../../Shared/interfaces/size";
import { Product } from "../../../Shared/models/product";

export class InvoiceLine
{
  public id: number;
  public invoiceId: number;
  public productId: number;
  public sizeId: number;
  public product: Product;
  public quantity: number;
  public size: ISize;
  public price: number;
  public total: number;

  constructor( props: Partial<InvoiceLine> = {} )
  {
    Object.assign( this, props );
  }
}
