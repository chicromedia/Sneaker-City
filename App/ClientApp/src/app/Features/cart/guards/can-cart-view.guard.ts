import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from "@ngxs/store";
import { CartState } from "../state-management/cart-state";
import { map } from "rxjs/operators";
import { notEmpty } from "../../../Shared/utils/functions";

@Injectable( {
  providedIn: 'root'
} )
export class CanCartViewGuard implements CanActivate
{
  constructor( private store: Store, private router: Router ) {}

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<boolean | UrlTree>
  {
    return this.store.selectOnce( CartState.requests )
      .pipe( map( requests =>
      {
        return notEmpty( requests ) ? true : this.router.parseUrl( "/" )
      } ) )
  }

}
