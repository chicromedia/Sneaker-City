import { Component, OnInit } from '@angular/core';
import { Select, Store } from "@ngxs/store";
import { DetailsState } from "./state-management/details-state";
import { Observable } from "rxjs";
import { ISize } from "../../Shared/interfaces/size";
import { AddProduct } from "../cart/state-management/cart-actions";
import { Product } from "../../Shared/models/product";

@Component( {
  selector: 'product-details',
  templateUrl: './details.component.html',
  styleUrls: [ './details.component.scss' ]
} )
export class DetailsComponent implements OnInit
{

  @Select( DetailsState.info ) info$: Observable<Product>;

  public selected: ISize;

  constructor( private store: Store ) { }

  ngOnInit(): void
  {
  }

  get availableLabel()
  {
    return this.selected.stock <= 10
      ? `Only left available ${ this.selected.stock }`
      : `More than 10 available`;
  }

  buy( details: Product )
  {
    this.store.dispatch( new AddProduct( {
      productId: details.productTypeId,
      sizeId: this.selected.id,
      quantity: 1
    } ) );
  }
}
