import { ICartRequest } from "../interfaces/cart-request";

export class AddProduct
{
  static readonly type: string = "[Cart] AddProduct";
  constructor(public payload: ICartRequest) {}
}

export class UpdateProduct
{
  static readonly type: string = "[Cart] UpdateProduct";
  constructor( public payload: ICartRequest ) {}
}

export class RemoveProduct
{
  static readonly type: string = "[Cart] RemoveProduct";
  constructor(public payload: number) {}
}

export class UpdateReview
{
  static readonly type: string = "[Cart] UpdateReview";
  constructor() {}
}

export class DoCheckout
{
  static readonly type: string = "[Cart] DoCheckout";
  constructor() {}
}
