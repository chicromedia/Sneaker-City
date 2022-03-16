import { IProduct } from "../../../Shared/interfaces/product";

export interface InvoiceLine
{
  id: number;
  productId: number;
  sizeId: number;
  product: IProduct;
  quantity: number;
}
