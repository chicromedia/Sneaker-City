import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from "./app.routing.module";
import { LayoutModule } from "./Layout/layout.module";
import { NgxsModule } from "@ngxs/store";
import { environment } from "../environments/environment";

@NgModule( {
  imports: [
    BrowserModule.withServerTransition( { appId: 'sneaker-city' } ),
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    NgxsModule.forRoot( [], { developmentMode: !environment.production } ),
    LayoutModule
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
