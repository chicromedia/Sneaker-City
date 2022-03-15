import { Action, Selector, State, StateContext } from "@ngxs/store";
import { ProductService } from "../../../Shared/services/product.service";
import { tap } from "rxjs/operators";
import { IProduct } from "../../../Shared/interfaces/product";
import { Injectable } from "@angular/core";
import { LoadInStock } from "./stock-actions";

interface IStockState
{
  list: IProduct[]
}

@State<IStockState>( {
  name: "stock"
} )
@Injectable()
export class StockState
{
  constructor( private service: ProductService ) {}

  @Selector()
  static list( { list }: IStockState )
  {
    return list;
  }

  @Action( LoadInStock )
  load( { patchState }: StateContext<IStockState> )
  {
    return this.service.getAllInStock()
      .pipe( tap( list =>
        {
          patchState( { list } );
        } )
      )
  }
}
