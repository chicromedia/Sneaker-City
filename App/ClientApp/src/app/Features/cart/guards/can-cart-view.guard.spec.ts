import { TestBed } from '@angular/core/testing';
import { CanCartViewGuard } from './can-cart-view.guard';
import { NgxsModule } from "@ngxs/store";
import { CartState } from "../state-management/cart-state";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe( 'CanCartViewGuard', () =>
{
  let guard: CanCartViewGuard;

  beforeEach( () =>
  {
    TestBed.configureTestingModule( {
      imports: [
        HttpClientTestingModule,
        NgxsModule.forRoot( [ CartState ] ),
        RouterTestingModule
      ],
    } );
    guard = TestBed.inject( CanCartViewGuard );
  } );

  it( 'should be created', () =>
  {
    expect( guard ).toBeTruthy();
  } );
} );
