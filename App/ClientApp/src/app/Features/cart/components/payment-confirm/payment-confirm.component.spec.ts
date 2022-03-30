import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentConfirmComponent } from './payment-confirm.component';
import { NgxsModule } from "@ngxs/store";
import { CartState } from "../../state-management/cart-state";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe( 'PaymentConfirmComponent', () =>
{
  let component: PaymentConfirmComponent;
  let fixture: ComponentFixture<PaymentConfirmComponent>;

  beforeEach( async () =>
  {
    await TestBed.configureTestingModule( {
      imports: [
        HttpClientTestingModule,
        NgxsModule.forRoot( [ CartState ] )
      ],
      declarations: [ PaymentConfirmComponent ]
    } )
      .compileComponents();
  } );

  beforeEach( () =>
  {
    fixture = TestBed.createComponent( PaymentConfirmComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () =>
  {
    expect( component ).toBeTruthy();
  } );
} );
