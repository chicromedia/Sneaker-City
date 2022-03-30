// This file is required by karma.conf.js and loads recursively all the .spec and framework files

import 'zone.js/testing';
import { getTestBed, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule, platformBrowserDynamicTesting } from '@angular/platform-browser-dynamic/testing';
import { InvoiceLine } from "./app/Features/cart/models/invoice-line";
import { Product } from "./app/Shared/models/product";
import { ProductType } from "./app/Shared/models/product-type";
import { setValue, Store } from "@ngxs/store";
import { ICartState } from "./app/Features/cart/state-management/cart-state";
import { ISize } from "./app/Shared/interfaces/size";
import { IImage } from "./app/Shared/interfaces/image";

declare const require: {
  context( path: string, deep?: boolean, filter?: RegExp ): {
    keys(): string[];
    <T>( id: string ): T;
  };
};

// First, initialize the Angular testing environment.
getTestBed()
  .initTestEnvironment(
    BrowserDynamicTestingModule,
    platformBrowserDynamicTesting()
  );
// Then we find all the tests.
const context = require.context( './', true, /\.spec\.ts$/ );
// And load the modules.
context.keys()
  .map( context );

export abstract class TestUtils
{
  private static nextId: number = -1000;

  static get getNextID()
  {
    return this.nextId = --this.nextId;
  }

  static friendlyTitle = ( title: string ) => title
    .replace( / /g, '-' )
    .replace( /[^\w-]+/g, '' )
    .toLowerCase();

  static mockInvoiceLine( name: string = 'Air Max Sleepers', price: number = 100, quantity: number = 1 )
  {
    const product = new Product( {
      id: this.getNextID,
      guid: this.friendlyTitle( name ),
      name,
      price,
      inStock: !!quantity,
      images: [
        { path: 'ca61e76f/air-max-sleepers.jpg' } as IImage
      ],
      type: new ProductType( {
        name: 'SKNRS Live',
        guid: this.friendlyTitle( 'SKNRS Live' )
      } )
    } );

    return new InvoiceLine( {
      id: this.getNextID,
      productId: product.id,
      total: product.price * quantity,
      size: { name: 'M 3.5 / W 5' } as ISize,
      quantity,
      product
    } )
  }

  static setState<T = any>( path: string, value: T )
  {
    const store = TestBed.inject( Store );
    const state = store.snapshot();
    store.reset( setValue( state, path, value ) );
  }

  static setCartState<T = any>( path: keyof ICartState, value: T )
  {
    this.setState( `cart.${ path }`, value );
  }
}
