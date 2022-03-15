export class SetPreload
{
  static readonly type: string = "[Common] Preload";
  constructor(public payload: boolean = true ) {}
}

export class GoToPage
{
  public static type: string = '[Common] GoToPage';
  constructor( public payload: string | string[] ) {}
}
