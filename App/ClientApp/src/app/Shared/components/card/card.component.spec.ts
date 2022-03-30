import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CardComponent } from './card.component';
import { NgxsModule } from "@ngxs/store";
import { CartState } from "../../../Features/cart/state-management/cart-state";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe( 'CardComponent', () =>
{
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach( async () =>
  {
    await TestBed.configureTestingModule( {
      imports: [
        HttpClientTestingModule,
        NgxsModule.forRoot( [ CartState ] )
      ],
      declarations: [ CardComponent ]
    } )
      .compileComponents();
  } );

  beforeEach( () =>
  {
    fixture = TestBed.createComponent( CardComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () =>
  {
    expect( component ).toBeTruthy();
  } );
} );
