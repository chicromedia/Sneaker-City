import { TestBed } from '@angular/core/testing';
import { CanConfirmGuard } from './can-confirm.guard';
import { NgxsModule } from "@ngxs/store";
import { CartState } from "../state-management/cart-state";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";

describe( 'CanConfirmGuard', () =>
{
  let guard: CanConfirmGuard;

  beforeEach( () =>
  {
    TestBed.configureTestingModule( {
      imports: [
        HttpClientTestingModule,
        NgxsModule.forRoot( [ CartState ] ),
        RouterTestingModule
      ],
    } );
    guard = TestBed.inject( CanConfirmGuard );
  } );

  it( 'should be created', () =>
  {
    expect( guard ).toBeTruthy();
  } );
} );
