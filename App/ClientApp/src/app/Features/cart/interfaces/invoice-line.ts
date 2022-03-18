import { IProduct } from "../../../Shared/interfaces/product";
import { ISize } from "../../../Shared/interfaces/size";

export interface InvoiceLine
{
  id: number;
  productId: number;
  sizeId: number;
  product: IProduct;
  quantity: number;
  size: ISize;
  price: number;
  total: number;
}
