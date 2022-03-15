import { Component, OnInit } from '@angular/core';
import { Select, Store } from "@ngxs/store";
import { MenuState } from "../../state-management/menu-state";
import { Observable } from "rxjs";
import { MenuItem } from "../../models/menu-item";
import { ViewMode } from "../../enums/view-mode";
import { ToggleViewMode } from "../../state-management/menu-actions";
import { CartState } from "../../../Features/cart/state-management/cart-state";

@Component( {
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: [ './navbar.component.scss' ]
} )
export class NavbarComponent implements OnInit
{

  @Select( MenuState.viewMode ) modeView$!: Observable<ViewMode>;
  @Select( MenuState.items ) items$!: Observable<MenuItem[]>;
  @Select( CartState.quantity ) quantity$: Observable<number>;

  constructor( private store: Store ) { }

  ngOnInit(): void
  {
  }

  toggleView()
  {
    this.store.dispatch( new ToggleViewMode() );
  }
}
