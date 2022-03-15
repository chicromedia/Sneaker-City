import { NgModule } from '@angular/core';
import { LayoutComponent } from './layout.component';
import { NavbarComponent } from "./components/navbar/navbar.component";
import { SharedModule } from "../Shared/shared.module";
import { CommonModule } from "@angular/common";
import { NgxsModule } from "@ngxs/store";
import { MenuState } from "./state-management/menu-state";


@NgModule( {
  imports: [
    CommonModule,
    NgxsModule,
    SharedModule
  ],
  declarations: [
    LayoutComponent,
    NavbarComponent
  ]
} )
export class LayoutModule
{
}
