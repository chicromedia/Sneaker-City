import { Image } from "./image";
import { ProductType } from "./product-type";
import { ISize } from "./size";

export interface IProduct
{
  id: string;
  name: string;
  guid: string;
  productTypeId: number;
  inStock: boolean;
  type: ProductType;
  publishDate: string;
  purchaseStartDate: string;
  purchaseEndDate: string;
  price: number;
  images: Image[];
  sizes: ISize[];
}
