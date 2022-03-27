import { ComponentFixture, TestBed } from '@angular/core/testing';
import { OrderReviewComponent } from './order-review.component';
import { CartItemComponent } from "../cart-item/cart-item.component";
import { ButtonComponent } from "../../../../Shared/components/button/button.component";
import { NgxsModule, Store } from "@ngxs/store";
import { TestUtils } from "../../../../../test";
import { By } from "@angular/platform-browser";
import { FormControl, FormGroup, FormGroupDirective, ReactiveFormsModule, Validators } from "@angular/forms";
import { CartState } from "../../state-management/cart-state";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { Invoice } from "../../models/invoice";
import { ImageUrlPipe } from "../../../../Shared/pipes/image-url.pipe";
import { DoCheckout, SetPaymentStep } from "../../state-management/cart-actions";
import { PaymentStep } from "../../enums/payment-step";

describe( 'OrderReviewComponent', () =>
{
  let component: OrderReviewComponent;
  let fixture: ComponentFixture<OrderReviewComponent>;
  let store: Store;

  beforeEach( async () =>
  {
    await TestBed.configureTestingModule( {
      imports: [
        NgxsModule.forRoot( [ CartState ] ),
        HttpClientTestingModule,
        ReactiveFormsModule
      ],
      declarations: [
        OrderReviewComponent,
        CartItemComponent,
        ImageUrlPipe,
        ButtonComponent
      ]
    } )
      .overrideComponent( OrderReviewComponent, {
        set: { providers: [ FormGroupDirective ] }
      } )
      .compileComponents();
  } );

  beforeEach( () =>
  {
    fixture = TestBed.createComponent( OrderReviewComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();

    store = TestBed.inject( Store );
  } );

  it( 'should create', () =>
  {
    expect( component ).toBeTruthy();
  } );

  it( 'should display cart-item in review', () =>
  {
    const invoice = new Invoice( { lines: [ TestUtils.mockInvoiceLine() ] } );
    TestUtils.setCartState( "review", invoice );

    fixture.detectChanges();

    const items = fixture.debugElement.queryAll( By.directive( CartItemComponent ) );
    expect( items.length ).toEqual( 1 );
    expect( items[ 0 ].componentInstance.item ).toEqual( invoice.lines[ 0 ] );
    expect( items[ 0 ].componentInstance.readOnly ).toBeTruthy();
    expect( items[ 0 ].componentInstance.thumbnailWidth ).toEqual( 80 );
  } );

  it( 'should disable button \'Confirm Order\' when form is invalid', () =>
  {
    const invoice = new Invoice( { lines: [ TestUtils.mockInvoiceLine() ] } );
    TestUtils.setCartState( "review", invoice );
    const directive = fixture.debugElement.injector.get( FormGroupDirective );
    directive.form = new FormGroup( { name: new FormControl( '', Validators.required ) } );

    fixture.detectChanges();

    const element = fixture.debugElement.query( By.css( "btn-link[ng-reflect-label='Confirm Order'" ) );
    expect( element.componentInstance.disabled ).toBeTruthy();
    expect( directive.invalid ).toBeTruthy();
  } );

  it( 'should dispatch DoCheckout when the user clicks on button \'Confirm Order\' and form is valid', () =>
  {
    const invoice = new Invoice( { lines: [ TestUtils.mockInvoiceLine() ] } );
    TestUtils.setCartState( "review", invoice );
    const directive = fixture.debugElement.injector.get( FormGroupDirective );
    directive.form = new FormGroup( { name: new FormControl( 'Test', Validators.required ) } );
    const dispatchSpy = spyOn( store, "dispatch" );

    fixture.detectChanges();
    const element = fixture.debugElement.query( By.css( "btn-link[ng-reflect-label='Confirm Order'" ) );
    element.triggerEventHandler( 'click', null );

    expect( element.componentInstance.disabled ).toBeFalse()
    expect( directive.invalid ).toBeFalse()
    expect( dispatchSpy ).toHaveBeenCalledWith( new DoCheckout() );
  } );

  it( 'should dispatch SetPaymentStep with Payment.PAYMENT when the user clicks on button \'Back\'', () =>
  {
    const invoice = new Invoice( { lines: [ TestUtils.mockInvoiceLine() ] } );
    TestUtils.setCartState( "review", invoice );
    const directive = fixture.debugElement.injector.get( FormGroupDirective );
    directive.form = new FormGroup( { name: new FormControl( 'Test', Validators.required ) } );
    const dispatchSpy = spyOn( store, "dispatch" );

    fixture.detectChanges();
    const element = fixture.debugElement.query( By.css( "btn-link[ng-reflect-label='Back'" ) );
    element.triggerEventHandler( 'click', null );

    expect( dispatchSpy ).toHaveBeenCalledWith( new SetPaymentStep( PaymentStep.PAYMENT ) );
  } );
} );
