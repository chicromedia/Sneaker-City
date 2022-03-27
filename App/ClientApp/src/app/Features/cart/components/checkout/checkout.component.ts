import { Component, OnDestroy, OnInit } from '@angular/core';
import { Select, Store } from "@ngxs/store";
import { CartState } from "../../state-management/cart-state";
import { Observable } from "rxjs";
import { PaymentStep } from "../../enums/payment-step";
import { Invoice } from "../../interfaces/invoice";
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { SetPaymentStep } from "../../state-management/cart-actions";

@Component( {
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: [ './checkout.component.scss' ],
  host: {
    '[class.container]': 'true'
  }
} )
export class CheckoutComponent implements OnInit, OnDestroy
{

  @Select( CartState.review ) review$: Observable<Invoice>;
  @Select( CartState.step ) step$: Observable<PaymentStep>;

  public formGroup: FormGroup;
  public paymentStep = PaymentStep;

  constructor( private fb: FormBuilder, private store: Store ) { }

  ngOnInit(): void
  {
    this.formGroup = this.fb.group( {
      orderId: this.store.selectSnapshot( CartState.orderId ),
      billingInfo: this.fb.group( {
        firstName: [ '', Validators.required ],
        lastName: [ '' ],
        address: [ '', Validators.required ],
        city: [ '', Validators.required ],
        state: [ '' ],
        zip: [ '', Validators.required ],
        email: [ '', [ Validators.required, Validators.email ] ],
        phone: [ '', Validators.required ],
      } ),
      card: this.fb.group( {
        number: [ '', Validators.required ],
        expire: [ '', Validators.required ],
        secureCode: [ '', Validators.required ]
      } ),
      requests: this.fb.control( this.store.selectSnapshot( CartState.requests ) )
    } )
  }

  ngOnDestroy()
  {
    this.store.dispatch( new SetPaymentStep( PaymentStep.DELIVERY ) );
  }

}
