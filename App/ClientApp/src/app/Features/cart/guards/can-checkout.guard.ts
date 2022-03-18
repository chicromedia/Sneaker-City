import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from "@ngxs/store";
import { CartState } from "../state-management/cart-state";
import { map } from "rxjs/operators";

@Injectable( {
  providedIn: 'root'
} )
export class CanCheckoutGuard implements CanActivate
{

  constructor( private store: Store ) {}

  canActivate( route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<boolean>
  {
    return this.store.selectOnce( CartState.quantity )
      .pipe(
        map( quantity => !!quantity )
      );
  }

}
