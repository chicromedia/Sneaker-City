import { Component, OnDestroy, OnInit } from '@angular/core';
import { Select, Store } from "@ngxs/store";
import { ClearInStock, LoadInStock } from "./state-management/stock-actions";
import { Observable } from "rxjs";
import { IProduct } from "../../Shared/interfaces/product";
import { StockState } from "./state-management/stock-state";

@Component( {
  selector: 'stock',
  templateUrl: './stock.component.html',
  styleUrls: [ './stock.component.css' ]
} )
export class StockComponent implements OnInit, OnDestroy
{

  @Select( StockState.list ) list$: Observable<IProduct[]>;

  constructor( private store: Store ) { }

  ngOnInit(): void
  {
    this.store.dispatch( new LoadInStock() )
  }

  ngOnDestroy()
  {
    this.store.dispatch( new ClearInStock() );
  }


}
