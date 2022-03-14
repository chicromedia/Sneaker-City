import { NgModule } from '@angular/core';
import { SharedModule } from "../../Shared/shared.module";
import { RouterModule } from "@angular/router";
import { STOCK_ROUTES } from "./routes";
import { StockComponent } from './stock.component';
import { NgxsModule } from "@ngxs/store";
import { StockState } from "./state-management/stock-state";


@NgModule( {
  imports: [
    SharedModule,
    RouterModule.forChild( STOCK_ROUTES ),
    NgxsModule.forFeature( [ StockState ] )
  ],
  declarations: [
    StockComponent
  ]
} )
export class StockModule
{
}
