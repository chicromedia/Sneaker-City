import { Component, OnDestroy, OnInit } from '@angular/core';
import { FeedState } from "./state-management/feed-state";
import { Observable } from "rxjs";
import { IProduct } from "../../Shared/interfaces/product";
import { Select, Store } from "@ngxs/store";
import { ClearFeeds, LoadFeeds } from "./state-management/feed-actions";

@Component( {
  selector: 'feed',
  templateUrl: './feed.component.html',
  styleUrls: [ './feed.component.css' ]
} )
export class FeedComponent implements OnInit, OnDestroy
{

  @Select( FeedState.list ) list$: Observable<IProduct[]>;

  constructor( private store: Store ) { }

  ngOnInit(): void
  {
    this.store.dispatch( new LoadFeeds() );
  }

  ngOnDestroy()
  {
    this.store.dispatch( new ClearFeeds() );
  }

}
