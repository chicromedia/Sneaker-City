import { Action, NgxsOnInit, Selector, State, StateContext } from "@ngxs/store";
import { ICartRequest } from "../interfaces/cart-request";
import { Injectable } from "@angular/core";
import { AddProduct, RemoveProduct } from "./cart-actions";
import { append, iif, patch, removeItem, updateItem } from "@ngxs/store/operators";

interface ICartState
{
  items: ICartRequest[];
}

@State<ICartState>( {
  name: 'cart',
  defaults: {
    items: []
  }
} )
@Injectable()
export class CartState implements NgxsOnInit
{

  constructor() {}

  ngxsOnInit( { patchState }: StateContext<ICartState> ): void
  {

  }

  @Selector()
  static items( { items }: ICartState )
  {
    return items;
  }

  @Selector()
  static quantity( { items }: ICartState )
  {
    return items?.length;
  }

  @Action( AddProduct )
  add( { getState, setState }: StateContext<ICartState>, { payload }: AddProduct )
  {
    setState( patch<ICartState>( {
      items: iif(
        items => items!.some( i => i.productId == payload.productId ),
        updateItem( i => i?.productId == payload.productId, payload ),
        append( [ payload ] )
      )
    } ) )
  }

  @Action( RemoveProduct )
  remove( { setState }: StateContext<ICartState>, { payload }: RemoveProduct )
  {
    setState( patch<ICartState>( {
      items: removeItem( i => i?.productId == payload )
    } ) )
  }
}
