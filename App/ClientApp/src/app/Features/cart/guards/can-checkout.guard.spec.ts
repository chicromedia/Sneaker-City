import { TestBed } from '@angular/core/testing';
import { CanCheckoutGuard } from './can-checkout.guard';
import { NgxsModule } from "@ngxs/store";
import { CartState } from "../state-management/cart-state";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe( 'CanCheckoutGuard', () =>
{
  let guard: CanCheckoutGuard;

  beforeEach( () =>
  {
    TestBed.configureTestingModule( {
      imports: [
        HttpClientTestingModule,
        NgxsModule.forRoot( [ CartState ] )
      ],
    } );
    guard = TestBed.inject( CanCheckoutGuard );
  } );

  it( 'should be created', () =>
  {
    expect( guard ).toBeTruthy();
  } );
} );
