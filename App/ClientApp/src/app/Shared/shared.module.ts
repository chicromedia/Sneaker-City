import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { ImageUrlPipe } from './pipes/image-url.pipe';
import { CardComponent } from "./components/card/card.component";
import { ImageGridComponent } from './components/image-grid/image-grid.component';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { ButtonComponent } from './components/button/button.component';
import { NgxsFormPluginModule } from "@ngxs/form-plugin";


@NgModule( {
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxsFormPluginModule
  ],
  declarations: [
    CardComponent,
    ImageUrlPipe,
    ImageGridComponent,
    ButtonComponent
  ],
  exports: [
    CommonModule,
    RouterModule,
    CardComponent,
    ImageUrlPipe,
    ImageGridComponent,
    ReactiveFormsModule,
    ButtonComponent,
    FormsModule,
    NgxsFormPluginModule
  ]
} )
export class SharedModule
{
}
