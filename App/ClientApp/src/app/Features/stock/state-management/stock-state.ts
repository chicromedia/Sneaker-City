import { Action, Selector, State, StateContext } from "@ngxs/store";
import { ProductService } from "../../../Shared/services/product.service";
import { tap } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { ClearInStock, LoadInStock } from "./stock-actions";
import { Product } from "../../../Shared/models/product";

interface IStockState
{
  list: Product[]
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

  @Action( ClearInStock )
  clear( { patchState }: StateContext<IStockState> )
  {
    patchState( { list: [] } );
  }
}
