import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app.routing.module";
import { LayoutModule } from "./Layout/layout.module";
import { NgxsModule } from "@ngxs/store";
import { environment } from "../environments/environment";
import { CommonState } from "./Shared/state-management/common-state";
import { CartState } from "./Features/cart/state-management/cart-state";
import { NgxsStoragePluginModule } from '@ngxs/storage-plugin';
import { MenuState } from "./Layout/state-management/menu-state";
import { NgxsFormPluginModule } from "@ngxs/form-plugin";

@NgModule( {
  imports: [
    BrowserModule.withServerTransition( { appId: 'sneaker-city' } ),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    LayoutModule,
    NgxsModule.forRoot( [
        MenuState,
        CommonState,
        CartState
      ],
      { developmentMode: !environment.production }
    ),
    NgxsFormPluginModule.forRoot(),
    NgxsStoragePluginModule.forRoot( {
      key: [
        CommonState,
        CartState
      ]
    } )
  ],
  declarations: [
    AppComponent,
  ],
  providers: [],
  bootstrap: [ AppComponent ]
} )
export class AppModule
{
}
