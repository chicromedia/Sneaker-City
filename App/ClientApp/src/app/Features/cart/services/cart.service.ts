import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../../environments/environment";
import { ICartRequest } from "../interfaces/cart-request";
import { Invoice } from "../interfaces/invoice";

@Injectable( {
  providedIn: 'root'
} )
export class CartService
{
  private readonly API_BASE_URL: string = `${ environment.baseApiUrl }/cart`;

  constructor( private http: HttpClient ) { }

  getReview( requests: ICartRequest[] )
  {
    return this.http.post<Invoice>( `${ this.API_BASE_URL }/review`, requests );
  }
}
