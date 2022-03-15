import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { IProduct } from "../interfaces/product";
import { environment } from "../../../environments/environment";

@Injectable( {
  providedIn: 'root'
} )
export class ProductService
{

  private readonly API_BASE_URL: string = `${ environment.baseApiUrl }/products`;

  constructor( private http: HttpClient ) { }

  getFirstByGuid( guid?: string | null )
  {
    return this.http.get<IProduct>( `${ this.API_BASE_URL }/details/${ guid }` );
  }

  getAllFeeds()
  {
    return this.http.get<IProduct[]>( `${ this.API_BASE_URL }/feed` );
  }

  getAllInStock()
  {
    return this.http.get<IProduct[]>( `${ this.API_BASE_URL }/in-stock` );
  }

  getAllUpComing()
  {
    return this.http.get<IProduct[]>( `${ this.API_BASE_URL }/up-coming` );
  }
}
