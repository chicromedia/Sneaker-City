import { Component, OnInit } from '@angular/core';
import { Store } from "@ngxs/store";

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

  constructor( private store: Store ) { }

  ngOnInit(): void
  {
  }

  doCheckout()
  {

  }
}
