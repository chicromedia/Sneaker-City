import { Component, Input, OnInit } from '@angular/core';
import { IImage } from "../../interfaces/image";

@Component( {
  selector: 'image-grid',
  templateUrl: './image-grid.component.html',
  styleUrls: [ './image-grid.component.scss' ],
  host: {
    '[class.row]': 'true'
  }
} )
export class ImageGridComponent implements OnInit
{

  @Input()
  source: IImage[]

  constructor() { }

  ngOnInit(): void
  {
  }

}
