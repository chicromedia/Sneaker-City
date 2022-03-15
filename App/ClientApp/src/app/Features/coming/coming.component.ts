import { Component, OnDestroy, OnInit } from '@angular/core';
import { Select, Store } from "@ngxs/store";
import { ClearUpComing, LoadUpComing } from "./state-management/coming-actions";
import { Observable } from "rxjs";
import { IProduct } from "../../Shared/interfaces/product";
import { ComingState } from "./state-management/coming-state";

@Component( {
  selector: 'coming',
  templateUrl: './coming.component.html',
  styleUrls: [ './coming.component.css' ]
} )
export class ComingComponent implements OnInit, OnDestroy
{

  @Select( ComingState.list ) list$: Observable<IProduct[]>;

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
