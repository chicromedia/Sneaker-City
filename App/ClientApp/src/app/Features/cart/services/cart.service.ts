import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { ICartRequest } from "../interfaces/cart-request";
import { SalesTransaction } from "../interfaces/sales-transaction";
import { Invoice } from "../models/invoice";

@Injectable( {
  providedIn: 'root'
} )
export class CartService
{
  private readonly API_BASE_URL: string = `${ environment.baseApiUrl }/cart`;

  constructor( private http: HttpClient ) { }

  getReview( requests: ICartRequest[], orderId: string )
  {
    const params = new HttpParams( orderId ? { fromObject: { orderId } } : {} );
    return this.http.post<Invoice>( `${ this.API_BASE_URL }/review`, requests, { params } );
  }

  checkout( transaction?: SalesTransaction )
  {
    return this.http.put<Invoice>( `${ this.API_BASE_URL }/checkout`, transaction );
  }
}
