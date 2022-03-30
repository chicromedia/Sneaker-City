import { ComponentFixture, TestBed } from '@angular/core/testing';
import { StockComponent } from './stock.component';
import { NgxsModule } from "@ngxs/store";
import { CartState } from "../cart/state-management/cart-state";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe( 'StockComponent', () =>
{
  let component: StockComponent;
  let fixture: ComponentFixture<StockComponent>;

  beforeEach( async () =>
  {
    await TestBed.configureTestingModule( {
      imports: [
        HttpClientTestingModule,
        NgxsModule.forRoot( [ CartState ] )
      ],
      declarations: [ StockComponent ]
    } )
      .compileComponents();
  } );

  beforeEach( () =>
  {
    fixture = TestBed.createComponent( StockComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () =>
  {
    expect( component ).toBeTruthy();
  } );
} );
