import { NgModule } from '@angular/core';
import { RouterModule } from "@angular/router";
import { LayoutComponent } from "./Layout/layout.component";
import { MainRoutes } from "./Shared/interfaces/routes";

const APP_ROUTES: MainRoutes = [
  {
    path: "",
    component: LayoutComponent,
    loadChildren: () => import("./Features/feed/feed.module").then( m => m.FeedModule ),
    data: {
      title: "Feed"
    }
  },
  {
    path: "in-stock",
    component: LayoutComponent,
    loadChildren: () => import("./Features/stock/stock.module").then( m => m.StockModule ),
    data: {
      title: "In Stock"
    }
  },
  {
    path: "up-coming",
    component: LayoutComponent,
    loadChildren: () => import("./Features/coming/coming.module").then( m => m.ComingModule ),
    data: {
      title: "Upcoming"
    }
  },
  {
    path: "details",
    component: LayoutComponent,
    loadChildren: () => import("./Features/details/details.module").then( m => m.DetailsModule )
  },
  {
    path: "**", redirectTo: "/", pathMatch: "full"
  }
]

@NgModule( {
  imports: [
    RouterModule.forRoot( APP_ROUTES )
  ],
  exports: [
    RouterModule
  ]
} )
export class AppRoutingModule
{
}
