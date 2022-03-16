import { Component, OnInit } from '@angular/core';
import { Select, Store } from "@ngxs/store";
import { Observable } from "rxjs";
import { CartState } from "./state-management/cart-state";
import { Invoice } from "./interfaces/invoice";

@Component( {
  selector: 'cart',
  templateUrl: './cart.component.html',
  styleUrls: [ './cart.component.scss' ],
  host: {
    '[class.container]': 'true'
  }
} )
export class CartComponent implements OnInit
{
  @Select( CartState.review ) review$: Observable<Invoice>;

  constructor( private store: Store ) { }

  ngOnInit(): void
  {
  }

  doCheckout()
  {

  }
}
