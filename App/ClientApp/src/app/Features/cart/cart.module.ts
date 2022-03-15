import { NgModule } from '@angular/core';
import { CartComponent } from './cart.component';
import { SharedModule } from "../../Shared/shared.module";
import { RouterModule } from "@angular/router";
import { CART_ROUTES } from "./routes";


@NgModule( {
  imports: [
    SharedModule,
    RouterModule.forChild( CART_ROUTES )
  ],
  declarations: [
    CartComponent
  ]
} )
export class CartModule
{
}
