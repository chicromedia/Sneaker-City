import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComingComponent } from './coming.component';
import { NgxsModule } from "@ngxs/store";
import { CartState } from "../cart/state-management/cart-state";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe( 'ComingComponent', () =>
{
  let component: ComingComponent;
  let fixture: ComponentFixture<ComingComponent>;

  beforeEach( async () =>
  {
    await TestBed.configureTestingModule( {
      imports: [
        HttpClientTestingModule,
        NgxsModule.forRoot( [ CartState ] )
      ],
      declarations: [ ComingComponent ]
    } )
      .compileComponents();
  } );

  beforeEach( () =>
  {
    fixture = TestBed.createComponent( ComingComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () =>
  {
    expect( component ).toBeTruthy();
  } );
} );
