import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { Store } from "@ngxs/store";
import { CartState } from "../state-management/cart-state";
import { map } from "rxjs/operators";
import { PaymentStep } from "../enums/payment-step";

@Injectable( {
  providedIn: 'root'
} )
export class CanConfirmGuard implements CanActivate
{

  constructor( private store: Store, private router: Router ) {}

  canActivate( { paramMap }: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<boolean | UrlTree>
  {
    return this.store.selectOnce( CartState.step )
      .pipe(
        map( step =>
        {
          const isCurrentOrderId = this.store.selectSnapshot( CartState.orderId ) == paramMap.get( 'orderId' );
          const isPaymentComplete = step == PaymentStep.COMPLETE;

          return !( isPaymentComplete && isCurrentOrderId )
            ? this.router.parseUrl( '/' )
            : true;
        } )
      );
  }
}
