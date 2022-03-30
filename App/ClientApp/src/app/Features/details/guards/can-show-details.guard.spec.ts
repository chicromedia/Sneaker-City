import { TestBed } from '@angular/core/testing';
import { CanShowDetailsGuard } from './can-show-details.guard';
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { NgxsModule } from "@ngxs/store";
import { CartState } from "../../cart/state-management/cart-state";

describe( 'CanShowDetailsGuard', () =>
{
  let guard: CanShowDetailsGuard;

  beforeEach( () =>
  {
    TestBed.configureTestingModule( {
      imports: [
        HttpClientTestingModule,
        NgxsModule.forRoot( [ CartState ] )
      ]
    } );
    guard = TestBed.inject( CanShowDetailsGuard );
  } );

  it( 'should be created', () =>
  {
    expect( guard ).toBeTruthy();
  } );
} );
