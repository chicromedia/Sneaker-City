import { Component, Input, OnInit } from '@angular/core';
import { Product } from "../../models/product";

@Component( {
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: [ './card.component.scss' ],
  host: {
    '[class]': 'col ? "col-md-" + col : ""'
  }
} )
export class CardComponent implements OnInit
{

  @Input()
  item!: Product;
  @Input()
  col: number = 4;
  @Input()
  showDate: boolean;

  constructor() { }

  ngOnInit(): void
  {
  }

  notify()
  {

  }
}
