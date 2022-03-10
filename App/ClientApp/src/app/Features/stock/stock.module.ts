import { NgModule } from '@angular/core';
import { SharedModule } from "../../Shared/shared.module";
import { RouterModule } from "@angular/router";
import { STOCK_ROUTES } from "./routes";
import { StockComponent } from './stock.component';


@NgModule( {
  imports: [
    SharedModule,
    RouterModule.forChild( STOCK_ROUTES )
  ],
  declarations: [
    StockComponent
  ]
} )
export class StockModule
{
}
