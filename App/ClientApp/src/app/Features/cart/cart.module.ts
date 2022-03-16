import { NgModule } from '@angular/core';
import { CartComponent } from './cart.component';
import { SharedModule } from "../../Shared/shared.module";
import { RouterModule } from "@angular/router";
import { CART_ROUTES } from "./routes";
import { CartItemComponent } from './components/cart-item/cart-item.component';


@NgModule( {
  imports: [
    SharedModule,
    RouterModule.forChild( CART_ROUTES )
  ],
  declarations: [
    CartComponent,
    CartItemComponent
  ]
} )
export class CartModule
{
}
