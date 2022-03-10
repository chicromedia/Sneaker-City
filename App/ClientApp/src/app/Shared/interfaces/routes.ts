import { Route } from "@angular/router";

interface IMainRoute extends Route
{
  data?: {
    title: string
  }
}

export declare type MainRoutes = IMainRoute[];
