import { Route } from "@angular/router";

export interface IMainRoute extends Route
{
  data?: Partial<{
    title: string,
    menuHidden: boolean;
  }>
}

export declare type MainRoutes = IMainRoute[];
