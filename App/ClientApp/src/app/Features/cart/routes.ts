import { Routes } from "@angular/router";
import { CartComponent } from "./cart.component";
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { CanCheckoutGuard } from "./guards/can-checkout.guard";
import { CanCartViewGuard } from "./guards/can-cart-view.guard";
import { PaymentConfirmComponent } from "./components/payment-confirm/payment-confirm.component";
import { CanConfirmGuard } from "./guards/can-confirm.guard";

export const CART_ROUTES: Routes = [
  {
    path: "",
    component: CartComponent,
    canActivate: [ CanCartViewGuard ]
  },
  {
    path: "checkout",
    component: CheckoutComponent,
    canActivate: [ CanCheckoutGuard ]
  },
  {
    path: "confirm/:orderId",
    component: PaymentConfirmComponent,
    canActivate: [ CanConfirmGuard ]
  }
]
