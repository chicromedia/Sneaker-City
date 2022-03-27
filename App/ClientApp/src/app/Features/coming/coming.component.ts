import { Component, OnDestroy, OnInit } from '@angular/core';
import { Select, Store } from "@ngxs/store";
import { ClearUpComing, LoadUpComing } from "./state-management/coming-actions";
import { Observable } from "rxjs";
import { ComingState } from "./state-management/coming-state";
import { Product } from "../../Shared/models/product";

@Component( {
  selector: 'coming',
  templateUrl: './coming.component.html',
  styleUrls: [ './coming.component.css' ]
} )
export class ComingComponent implements OnInit, OnDestroy
{

  @Select( ComingState.list ) list$: Observable<Product[]>;

  constructor( private store: Store ) { }

  ngOnInit(): void
  {
    this.store.dispatch( new LoadUpComing() )
  }

  ngOnDestroy()
  {
    this.store.dispatch( new ClearUpComing() );
  }

}
