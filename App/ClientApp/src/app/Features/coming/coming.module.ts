import { NgModule } from '@angular/core';
import { SharedModule } from "../../Shared/shared.module";
import { RouterModule } from "@angular/router";
import { COMING_ROUTES } from "./routes";
import { ComingComponent } from './coming.component';
import { NgxsModule } from "@ngxs/store";
import { ComingState } from "./state-management/coming-state";


@NgModule( {
  imports: [
    SharedModule,
    RouterModule.forChild( COMING_ROUTES ),
    NgxsModule.forFeature( [ ComingState ] )
  ],
  declarations: [
    ComingComponent
  ]
} )
export class ComingModule
{
}
