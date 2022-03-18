import { Component, OnInit } from '@angular/core';
import { Select } from "@ngxs/store";
import { CartState } from "../../state-management/cart-state";
import { Observable } from "rxjs";
import { PaymentStep } from "../../enums/payment-step";
import { Invoice } from "../../interfaces/invoice";

@Component( {
  selector: 'checkout',
  templateUrl: './checkout.component.html',
  styleUrls: [ './checkout.component.scss' ],
  host: {
    '[class.container]': 'true'
  }
} )
export class CheckoutComponent implements OnInit
{

  @Select( CartState.review ) review$: Observable<Invoice>;
  @Select( CartState.step ) step$: Observable<PaymentStep>;

  constructor() { }

  ngOnInit(): void
  {
  }

}
