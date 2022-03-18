import { Routes } from "@angular/router";
import { CartComponent } from "./cart.component";
import { CheckoutComponent } from "./components/checkout/checkout.component";
import { CanCheckoutGuard } from "./guards/can-checkout.guard";

export const CART_ROUTES: Routes = [
  {
    path: "",
    component: CartComponent
  },
  {
    path: "checkout",
    component: CheckoutComponent,
    canActivate: [ CanCheckoutGuard ]
  }
]
