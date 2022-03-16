import { Action, NgxsOnInit, Selector, State, StateContext, Store } from "@ngxs/store";
import { ICartRequest } from "../interfaces/cart-request";
import { Injectable } from "@angular/core";
import { AddProduct, RemoveProduct, UpdateProduct, UpdateReview } from "./cart-actions";
import { append, iif, patch, removeItem, updateItem } from "@ngxs/store/operators";
import { CartService } from "../services/cart.service";
import { tap } from "rxjs/operators";
import { Invoice } from "../interfaces/invoice";

interface ICartState
{
  requests: ICartRequest[];
  review?: Invoice;
}

@State<ICartState>( {
  name: 'cart',
  defaults: {
    requests: []
  }
} )
@Injectable()
export class CartState implements NgxsOnInit
{

  constructor( private service: CartService, private store: Store ) {}

  ngxsOnInit( { dispatch, getState }: StateContext<ICartState> ): void
  {
    const { requests } = getState();
    if ( requests.length )
    {
      dispatch( new UpdateReview() );
    }
  }

  @Selector()
  static requests( { requests }: ICartState )
  {
    return requests;
  }

  @Selector()
  static review( { review }: ICartState )
  {
    return review;
  }

  @Selector()
  static quantity( { requests }: ICartState )
  {
    return requests?.reduce( ( total, item ) => total + Number( item.quantity ), 0 );
  }

  @Action( AddProduct )
  add( { getState, setState, dispatch }: StateContext<ICartState>, { payload }: AddProduct )
  {
    setState( patch<ICartState>( {
      requests: iif(
        requests => requests!.some( i => i.productId == payload.productId ),
        updateItem( i => i?.productId == payload.productId, payload ),
        append( [ payload ] )
      )
    } ) )
    return dispatch( new UpdateReview() );
  }

  @Action( UpdateProduct )
  update( { getState, setState, dispatch }: StateContext<ICartState>, { payload }: UpdateProduct )
  {
    setState( patch<ICartState>( {
      requests: updateItem<ICartRequest>( i => i?.productId == payload.productId, payload )
    } ) )
    return dispatch( new UpdateReview() );
  }

  @Action( UpdateReview )
  review( { getState, patchState }: StateContext<ICartState> )
  {
    const { requests } = getState();
    return this.service.getReview( requests )
      .pipe( tap( review => patchState( { review } ) ) );
  }

  @Action( RemoveProduct )
  remove( { setState, dispatch }: StateContext<ICartState>, { payload }: RemoveProduct )
  {
    setState( patch<ICartState>( {
      requests: removeItem( i => i?.productId == payload )
    } ) );
    return dispatch( new UpdateReview() );
  }
}
