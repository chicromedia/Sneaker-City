import { ICartRequest } from "../interfaces/cart-request";

export class AddProduct
{
  static readonly type: string = "[Cart] AddProduct";
  constructor(public payload: ICartRequest) {}
}

export class RemoveProduct
{
  static readonly type: string = "[Cart] RemoveProduct";
  constructor(public payload: number) {}
}

export class DoCheckout
{
  static readonly type: string = "[Cart] DoCheckout";
  constructor() {}
}
