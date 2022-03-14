import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from "@angular/router";
import { CardComponent } from './card/card.component';
import { ImageUrlPipe } from './pipes/image-url.pipe';


@NgModule( {
  imports: [
    CommonModule,
    RouterModule
  ],
  declarations: [
    CardComponent,
    ImageUrlPipe
  ],
  exports: [
    CommonModule,
    RouterModule,
    CardComponent
  ]
} )
export class SharedModule
{
}
