import { NgModule } from '@angular/core';
import { SharedModule } from "../../Shared/shared.module";
import { RouterModule } from "@angular/router";
import { COMING_ROUTES } from "./routes";
import { ComingComponent } from './coming.component';


@NgModule( {
  imports: [
    SharedModule,
    RouterModule.forChild( COMING_ROUTES )
  ],
  declarations: [
    ComingComponent
  ]
} )
export class ComingModule
{
}
