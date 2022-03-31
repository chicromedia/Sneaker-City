import { Action, getValue, NgxsOnInit, Selector, State, StateContext } from "@ngxs/store";
import { ICartRequest } from "../interfaces/cart-request";
import { Injectable } from "@angular/core";
import { AddProduct, ClearPayment, DoCheckout, RemoveProduct, SetPaymentStep, UpdateProduct, UpdateReview } from "./cart-actions";
import { append, iif, patch, removeItem, updateItem } from "@ngxs/store/operators";
import { CartService } from "../services/cart.service";
import { tap } from "rxjs/operators";
import { PaymentStep } from "../enums/payment-step";
import { FormState } from "../../../Shared/interfaces/form-state";
import { SalesTransaction } from "../interfaces/sales-transaction";
import { notEmpty } from "../../../Shared/utils/functions";
import { GoToPage } from "../../../Shared/state-management/common-actions";
import { Invoice } from "../models/invoice";

export interface ICartState
{
  checkout: FormState<SalesTransaction>,
  requests: ICartRequest[];
  step?: PaymentStep;
  review?: Invoice;
}

@State<ICartState>( {
  name: 'cart',
  defaults: {
    checkout: {
      model: undefined
    },
    step: PaymentStep.DELIVERY,
    requests: []
  }
} )
@Injectable()
export class CartState implements NgxsOnInit
{

  constructor( private service: CartService ) {}

  ngxsOnInit( { dispatch, getState }: StateContext<ICartState> ): void
  {
    const { requests } = getState();
    if ( notEmpty( requests ) )
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
  static step( { step }: ICartState )
  {
    return step;
  }

  @Selector()
  static review( { review }: ICartState )
  {
    return review;
  }

  @Selector()
  static quantity( { requests }: ICartState )
  {
    return requests?.length;
  }

  @Selector()
  static orderId( { review }: ICartState )
  {
    return review?.orderId;
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
    return dispatch( [ new UpdateReview(), new GoToPage( [ "/cart" ] ) ] );
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
    const { requests, review } = getState();
    return this.service.getReview( requests, getValue( review, 'orderId' ) )
      .pipe( tap( review => patchState( { review } ) ) );
  }

  @Action( SetPaymentStep )
  setSep( { patchState }: StateContext<ICartState>, { payload }: SetPaymentStep )
  {
    patchState( { step: payload } );
  }

  @Action( DoCheckout )
  checkout( { getState, setState, dispatch }: StateContext<ICartState> )
  {
    const { checkout } = getState();
    return this.service.checkout( checkout.model )
      .pipe(
        tap( ( { orderId } ) =>
        {
          setState( patch( {
            step: PaymentStep.COMPLETE,
            review: patch( { orderId } )
          } ) );
          dispatch( new GoToPage( [ "/cart/confirm", orderId ] ) );
        } )
      )
  }

  @Action( ClearPayment )
  clearPayment( { setState }: StateContext<ICartState>, { payload }: SetPaymentStep )
  {
    setState( { step: PaymentStep.DELIVERY, requests: [], checkout: { model: undefined } } );
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
