import { IProduct } from "../../../Shared/interfaces/product";

export class SetDetails
{
  static readonly type: string = '[Details] Set';
  constructor(public payload: IProduct) {}
}

export class ClearDetails
{
  static readonly type: string = '[Details] Clear';
}
