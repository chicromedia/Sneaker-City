export class ProductType
{
  id: number;
  name: string;
  guid: string;
  isAvailable: boolean;

  constructor( props: Partial<ProductType> = {} )
  {
    Object.assign( this, props );
  }
}
