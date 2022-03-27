import { Component, Host, OnInit } from '@angular/core';
import { FormGroupName } from "@angular/forms";
import { Store } from "@ngxs/store";
import { PaymentStep } from "../../enums/payment-step";
import { SetPaymentStep } from "../../state-management/cart-actions";

@Component( {
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: [ './shipping-form.component.scss' ]
} )
export class ShippingFormComponent implements OnInit
{

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
      this.store.dispatch( new SetPaymentStep( PaymentStep.PAYMENT ) );
    }
  }
}
