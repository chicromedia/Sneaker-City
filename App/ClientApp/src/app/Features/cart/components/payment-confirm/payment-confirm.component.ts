import { Component, OnInit } from '@angular/core';
import { Store } from "@ngxs/store";
import { ClearPayment } from "../../state-management/cart-actions";
import { CartState } from "../../state-management/cart-state";

@Component( {
  selector: 'payment-confirm',
  templateUrl: './payment-confirm.component.html',
  styleUrls: [ './payment-confirm.component.scss' ]
} )
export class PaymentConfirmComponent implements OnInit
{

  public orderId?: string;

  constructor( private store: Store ) { }

  ngOnInit(): void
  {
    this.orderId = this.store.selectSnapshot( CartState.orderId );
    this.store.dispatch( new ClearPayment() );
  }

}
