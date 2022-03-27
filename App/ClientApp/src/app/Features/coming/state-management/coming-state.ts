import { Action, Selector, State, StateContext } from "@ngxs/store";
import { ProductService } from "../../../Shared/services/product.service";
import { tap } from "rxjs/operators";
import { Injectable } from "@angular/core";
import { ClearUpComing, LoadUpComing } from "./coming-actions";
import { Product } from "../../../Shared/models/product";

interface IComingState
{
  list: Product[]
}

@State<IComingState>( {
  name: "coming"
} )
@Injectable()
export class ComingState
{
  constructor( private service: ProductService ) {}

  @Selector()
  static list( { list }: IComingState )
  {
    return list;
  }

  @Action( LoadUpComing )
  load( { patchState }: StateContext<IComingState> )
  {
    return this.service.getAllUpComing()
      .pipe( tap( list =>
        {
          patchState( { list } );
        } )
      )
  }

  @Action( ClearUpComing )
  clear( { patchState }: StateContext<IComingState> )
  {
    patchState( { list: [] } );
  }
}
