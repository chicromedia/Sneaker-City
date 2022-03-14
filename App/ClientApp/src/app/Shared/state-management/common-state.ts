import { Action, Selector, State, StateContext } from "@ngxs/store";
import { Injectable } from "@angular/core";
import { SetPreload } from "./common-actions";

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
  constructor() {}

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
}
