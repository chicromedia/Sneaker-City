import { ProductType } from "./product-type";
import { ISize } from "../interfaces/size";
import { IImage } from "../interfaces/image";

export class Product
{
  id: number;
  name: string;
  guid: string;
  productTypeId: number;
  inStock: boolean;
  type: ProductType;
  publishDate: string;
  purchaseStartDate: string;
  purchaseEndDate: string;
  price: number;
  images: Partial<IImage>[];
  sizes: Partial<ISize>[];

  constructor( props: Partial<Product> = {} )
  {
    Object.assign( this, props );
  }
}
