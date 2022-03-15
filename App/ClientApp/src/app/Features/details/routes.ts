import { Routes } from "@angular/router";
import { DetailsComponent } from "./details.component";
import { CanShowDetailsGuard } from "./guards/can-show-details.guard";

export const DETAILS_ROUTES: Routes = [
  {
    path: ":guid",
    component: DetailsComponent,
    canActivate: [ CanShowDetailsGuard ]
  }
]
