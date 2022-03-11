import { Route } from "@angular/router";

export interface IMainRoute extends Route
{
  data?: {
    title: string
  }
}

export declare type MainRoutes = IMainRoute[];
