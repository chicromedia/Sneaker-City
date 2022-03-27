import { NgModule } from '@angular/core';
import { CartComponent } from './cart.component';
import { SharedModule } from "../../Shared/shared.module";
import { RouterModule } from "@angular/router";
import { CART_ROUTES } from "./routes";
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { ShippingFormComponent } from './components/shipping-form/shipping-form.component';
import { PaymentFormComponent } from './components/payment-form/payment-form.component';
import { OrderReviewComponent } from './components/order-review/order-review.component';
import { PaymentConfirmComponent } from './components/payment-confirm/payment-confirm.component';


@NgModule( {
  imports: [
    SharedModule,
    RouterModule.forChild( CART_ROUTES )
  ],
  declarations: [
    CartComponent,
    CartItemComponent,
    CheckoutComponent,
    ShippingFormComponent,
    PaymentFormComponent,
    OrderReviewComponent,
    PaymentConfirmComponent
  ]
} )
export class CartModule
{
}
