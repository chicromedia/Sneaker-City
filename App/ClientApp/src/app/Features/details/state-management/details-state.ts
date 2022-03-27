import { Action, Selector, State, StateContext } from "@ngxs/store";
import { ProductService } from "../../../Shared/services/product.service";
import { Injectable } from "@angular/core";
import { ClearDetails, SetDetails } from "./details-actions";
import { Product } from "../../../Shared/models/product";

interface IDetailsState
{
  info: Product;
}

@State<IDetailsState>( {
  name: "details"
} )
@Injectable()
export class DetailsState
{
  constructor( private service: ProductService ) {}

  @Selector()
  static info( { info }: IDetailsState )
  {
    return info;
  }

  @Action( SetDetails )
  load( { patchState }: StateContext<IDetailsState>, { payload }: SetDetails )
  {
    patchState( { info: payload } );
  }

  @Action( ClearDetails )
  clear( { patchState }: StateContext<IDetailsState> )
  {
    patchState( { info: undefined } );
  }
}
