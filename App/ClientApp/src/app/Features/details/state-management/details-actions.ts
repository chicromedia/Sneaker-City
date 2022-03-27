import { Product } from "../../../Shared/models/product";

export class SetDetails
{
  static readonly type: string = '[Details] Set';
  constructor(public payload: Product) {}
}

export class ClearDetails
{
  static readonly type: string = '[Details] Clear';
}
