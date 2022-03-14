import { Action, Selector, State, StateContext } from "@ngxs/store";
import { ProductService } from "../../../Shared/services/product.service";
import { LoadFeeds } from "../../feed/state-management/feed-actions";
import { tap } from "rxjs/operators";
import { IProduct } from "../../../Shared/interfaces/product";
import { Injectable } from "@angular/core";

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

  @Action( LoadFeeds )
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
