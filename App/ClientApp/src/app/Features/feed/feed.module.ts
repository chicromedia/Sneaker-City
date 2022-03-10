import { NgModule } from '@angular/core';
import { SharedModule } from "../../Shared/shared.module";
import { RouterModule } from "@angular/router";
import { FEED_ROUTES } from "./routes";
import { FeedComponent } from './feed.component';


@NgModule( {
  imports: [
    SharedModule,
    RouterModule.forChild( FEED_ROUTES )
  ],
  declarations: [
    FeedComponent
  ]
} )
export class FeedModule
{
}
