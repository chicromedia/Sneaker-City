import { Component, Host, OnInit } from '@angular/core';
import { FormGroupName } from "@angular/forms";
import { SetPaymentStep } from "../../state-management/cart-actions";
import { PaymentStep } from "../../enums/payment-step";
import { Store } from "@ngxs/store";

@Component( {
  selector: 'payment-form',
  templateUrl: './payment-form.component.html',
  styleUrls: [ './payment-form.component.scss' ]
} )
export class PaymentFormComponent implements OnInit
{
  selected: boolean = true;

  constructor( @Host() public directive: FormGroupName,
               private store: Store
  )
  { }

  ngOnInit(): void
  {
  }

  continue()
  {
    if ( this.directive.valid )
    {
      this.store.dispatch( new SetPaymentStep( PaymentStep.REVIEW ) );
    }
  }

  back()
  {
    this.store.dispatch( new SetPaymentStep( PaymentStep.DELIVERY ) )
  }
}
