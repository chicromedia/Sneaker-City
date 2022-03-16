import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { ImageUrlPipe } from './pipes/image-url.pipe';
import { CardComponent } from "./components/card/card.component";
import { ImageGridComponent } from './components/image-grid/image-grid.component';
import { FormsModule } from "@angular/forms";


@NgModule( {
  imports: [
    CommonModule,
    RouterModule,
    FormsModule
  ],
  declarations: [
    CardComponent,
    ImageUrlPipe,
    ImageGridComponent
  ],
  exports: [
    CommonModule,
    RouterModule,
    CardComponent,
    ImageUrlPipe,
    ImageGridComponent,
    FormsModule
  ]
} )
export class SharedModule
{
}
