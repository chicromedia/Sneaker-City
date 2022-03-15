import { Action, Selector, State, StateContext } from "@ngxs/store";
import { ClearFeeds, LoadFeeds } from "./feed-actions";
import { tap } from "rxjs/operators";
import { IProduct } from "../../../Shared/interfaces/product";
import { ProductService } from "../../../Shared/services/product.service";
import { Injectable } from "@angular/core";

interface IFeedState
{
  list: IProduct[];
}

@State<IFeedState>( {
  name: "feed"
} )
@Injectable()
export class FeedState
{
  constructor( private service: ProductService ) {}

  @Selector()
  static list( { list }: IFeedState )
  {
    return list;
  }

  @Action( LoadFeeds )
  load( { patchState }: StateContext<IFeedState> )
  {
    return this.service.getAllFeeds()
      .pipe( tap( list =>
        {
          patchState( { list } );
        } )
      )
  }

  @Action( ClearFeeds )
  clear( { patchState }: StateContext<IFeedState> )
  {
    patchState( { list: [] } );
  }
}
