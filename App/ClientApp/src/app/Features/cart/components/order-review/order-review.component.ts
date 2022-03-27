import { Component, Host, OnInit } from '@angular/core';
import { Select, Store } from "@ngxs/store";
import { CartState } from "../../state-management/cart-state";
import { Observable } from "rxjs";
import { FormGroupDirective } from "@angular/forms";
import { DoCheckout, SetPaymentStep } from "../../state-management/cart-actions";
import { PaymentStep } from "../../enums/payment-step";
import { Invoice } from "../../models/invoice";

@Component( {
  selector: 'order-review',
  templateUrl: './order-review.component.html',
  styleUrls: [ './order-review.component.scss' ]
} )
export class OrderReviewComponent implements OnInit
{

  @Select( CartState.review ) review$: Observable<Invoice>;

  constructor( @Host() public directive: FormGroupDirective,
               private store: Store
  )
  { }

  ngOnInit(): void
  {
  }

  confirm()
  {
    if ( this.directive.valid )
    {
      this.store.dispatch( new DoCheckout() );
    }
  }

  back()
  {
    this.store.dispatch( new SetPaymentStep( PaymentStep.PAYMENT ) );
  }

}
