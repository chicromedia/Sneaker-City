import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { ImageUrlPipe } from './pipes/image-url.pipe';
import { CardComponent } from "./components/card/card.component";
import { ImageGridComponent } from './components/image-grid/image-grid.component';


@NgModule( {
  imports: [
    CommonModule,
    RouterModule
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
    ImageGridComponent
  ]
} )
export class SharedModule
{
}
