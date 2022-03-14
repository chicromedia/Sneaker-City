import { NgModule } from '@angular/core';
import { SharedModule } from "../../Shared/shared.module";
import { RouterModule } from "@angular/router";
import { FEED_ROUTES } from "./routes";
import { FeedComponent } from './feed.component';
import { NgxsModule } from "@ngxs/store";
import { FeedState } from "./state-management/feed-state";


@NgModule( {
  imports: [
    SharedModule,
    RouterModule.forChild( FEED_ROUTES ),
    NgxsModule.forFeature( [ FeedState ] )
  ],
  declarations: [
    FeedComponent
  ]
} )
export class FeedModule
{
}
