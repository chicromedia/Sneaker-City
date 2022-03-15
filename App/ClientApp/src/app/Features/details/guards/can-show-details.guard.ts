import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot } from '@angular/router';
import { Observable, throwError } from 'rxjs';
import { ProductService } from "../../../Shared/services/product.service";
import { catchError, map } from "rxjs/operators";
import { Store } from "@ngxs/store";
import { SetDetails } from "../state-management/details-actions";
import { GoToPage } from "../../../Shared/state-management/common-actions";

@Injectable( {
  providedIn: 'root'
} )
export class CanShowDetailsGuard implements CanActivate
{
  constructor( private service: ProductService, private store: Store ) {}

  canActivate( { paramMap }: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<boolean>
  {
    return this.service.getFirstByGuid( paramMap.get( 'guid' ) )
      .pipe(
        map( product =>
        {
          this.store.dispatch( new SetDetails( product ) );
          return true;
        } ),
        catchError( err =>
        {
          this.store.dispatch( new GoToPage( '/' ) );
          return throwError( err )
        } )
      )
  }

}
