import { Action, NgxsOnInit, Selector, State, StateContext } from "@ngxs/store";
import { Router } from "@angular/router";
import { MenuItem } from "../models/menu-item";
import { MainRoutes } from "../../Shared/interfaces/routes";
import { ViewMode } from "../enums/view-mode";
import { Injectable } from "@angular/core";
import { ToggleViewMode } from "./menu-actions";

interface IMenuState
{
  viewMode: ViewMode;
  items?: MenuItem[];
}

@State<IMenuState>( {
  name: 'menu',
  defaults: {
    viewMode: ViewMode.FEED,
  }
} )
@Injectable()
export class MenuState implements NgxsOnInit
{

  @Selector()
  static viewMode( { viewMode }: IMenuState )
  {
    return viewMode;
  }

  @Selector()
  static items( { items }: IMenuState )
  {
    return items;
  }

  constructor( private router: Router ) {}

  ngxsOnInit( { patchState }: StateContext<IMenuState> ): void
  {
    patchState( {
      items: ( this.router.config as MainRoutes )
        .filter( m => m!.data )
        .map( MenuItem.makeFrom )
    } );
  }

  @Action( ToggleViewMode )
  toggleViewMode( { getState, patchState }: StateContext<IMenuState> )
  {
    const { viewMode } = getState();
    patchState( { viewMode: viewMode == ViewMode.FEED ? ViewMode.GRID : ViewMode.FEED } );
  }
}
