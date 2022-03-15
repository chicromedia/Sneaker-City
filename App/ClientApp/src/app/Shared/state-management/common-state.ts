import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Injectable, NgZone } from "@angular/core";
import { GoToPage, SetPreload } from "./common-actions";
import { Router } from "@angular/router";
import { fromPromise } from "rxjs/internal-compatibility";

interface ICommonState
{
  loading: boolean;
}

@State<ICommonState>( {
  name: 'common',
  defaults: {
    loading: false
  }
} )
@Injectable()
export class CommonState
{
  constructor( private router: Router, private zone: NgZone ) {}

  @Selector()
  loading( { loading }: ICommonState )
  {
    return loading;
  }

  @Action( SetPreload )
  preload( { patchState }: StateContext<ICommonState>, { payload }: SetPreload )
  {
    patchState( { loading: payload } );
  }

  @Action( GoToPage )
  goToPage( {}: StateContext<ICommonState>, { payload }: GoToPage )
  {
    return fromPromise( this.zone.run( () => Array.isArray( payload )
      ? this.router.navigate( payload )
      : this.router.navigateByUrl( payload )
    ) );
  }
}
