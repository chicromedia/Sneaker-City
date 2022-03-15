import { NgModule } from '@angular/core';
import { DetailsComponent } from './details.component';
import { SharedModule } from "../../Shared/shared.module";
import { NgxsModule } from "@ngxs/store";
import { DetailsState } from "./state-management/details-state";
import { RouterModule } from "@angular/router";
import { DETAILS_ROUTES } from "./routes";


@NgModule( {
  imports: [
    SharedModule,
    NgxsModule.forFeature( [ DetailsState ] ),
    RouterModule.forChild( DETAILS_ROUTES )
  ],
  declarations: [
    DetailsComponent
  ]
} )

export class DetailsModule
{
}
