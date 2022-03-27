import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from "../../../environments/environment";
import { Product } from "../models/product";

@Injectable( {
  providedIn: 'root'
} )
export class ProductService
{

  private readonly API_BASE_URL: string = `${ environment.baseApiUrl }/products`;

  constructor( private http: HttpClient ) { }

  getFirstByGuid( guid?: string | null )
  {
    return this.http.get<Product>( `${ this.API_BASE_URL }/details/${ guid }` );
  }

  getAllFeeds()
  {
    return this.http.get<Product[]>( `${ this.API_BASE_URL }/feed` );
  }

  getAllInStock()
  {
    return this.http.get<Product[]>( `${ this.API_BASE_URL }/in-stock` );
  }

  getAllUpComing()
  {
    return this.http.get<Product[]>( `${ this.API_BASE_URL }/up-coming` );
  }
}
