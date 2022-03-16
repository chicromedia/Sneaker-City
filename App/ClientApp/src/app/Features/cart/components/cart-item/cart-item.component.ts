import { Component, Input, OnInit } from '@angular/core';
import { InvoiceLine } from "../../interfaces/invoice-line";
import { Store } from "@ngxs/store";
import { RemoveProduct, UpdateProduct } from "../../state-management/cart-actions";
import { ICartRequest } from "../../interfaces/cart-request";

@Component( {
  selector: 'cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: [ './cart-item.component.scss' ]
} )
export class CartItemComponent implements OnInit
{

  @Input()
  item: InvoiceLine;

  constructor( private store: Store ) { }

  ngOnInit(): void
  {
  }

  get quantities()
  {
    return this.item && this.item.product.inStock
      ? Array( 10 )
      : [];
  }

  updateRequest( request: Partial<ICartRequest> )
  {
    this.store.dispatch( new UpdateProduct( {
        productId: this.item.productId,
        quantity: this.item.quantity,
        sizeId: this.item.sizeId,
        ...request
      } as ICartRequest )
    );
  }

  remove()
  {
    this.store.dispatch( new RemoveProduct( this.item.productId ) );
  }
}
