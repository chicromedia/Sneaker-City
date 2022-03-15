import { Component, OnInit } from '@angular/core';
import { Select } from "@ngxs/store";
import { DetailsState } from "./state-management/details-state";
import { Observable } from "rxjs";
import { IProduct } from "../../Shared/interfaces/product";
import { ISize } from "../../Shared/interfaces/size";

@Component( {
  selector: 'product-details',
  templateUrl: './details.component.html',
  styleUrls: [ './details.component.scss' ]
} )
export class DetailsComponent implements OnInit
{

  @Select( DetailsState.info ) info$: Observable<IProduct>;

  public selected: ISize;

  constructor() { }

  ngOnInit(): void
  {
  }

  get availableLabel()
  {
    return this.selected.stock <= 10
      ? `Only left available ${ this.selected.stock }`
      : `More than 10 available`;
  }
}
