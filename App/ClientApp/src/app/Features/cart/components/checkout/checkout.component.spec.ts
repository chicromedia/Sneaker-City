import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CheckoutComponent } from './checkout.component';
import { ShippingFormComponent } from "../shipping-form/shipping-form.component";
import { PaymentFormComponent } from "../payment-form/payment-form.component";
import { NgxsModule, Store } from "@ngxs/store";
import { CartState } from "../../state-management/cart-state";
import { ReactiveFormsModule } from "@angular/forms";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { RouterTestingModule } from "@angular/router/testing";
import { TestUtils } from "../../../../../test";
import { PaymentStep } from "../../enums/payment-step";
import { By } from "@angular/platform-browser";
import { OrderReviewComponent } from "../order-review/order-review.component";
import { Invoice } from "../../models/invoice";
import { ImageUrlPipe } from "../../../../Shared/pipes/image-url.pipe";

describe( 'CheckoutComponent', () =>
{
  let component: CheckoutComponent;
  let fixture: ComponentFixture<CheckoutComponent>;
  let store: Store;

  beforeEach( async () =>
  {
    await TestBed.configureTestingModule( {
      imports: [
        NgxsModule.forRoot( [ CartState ] ),
        ReactiveFormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [
        CheckoutComponent,
        ShippingFormComponent,
        PaymentFormComponent,
        OrderReviewComponent,
        ImageUrlPipe
      ]
    } )
      .compileComponents();
  } );

  beforeEach( () =>
  {
    fixture = TestBed.createComponent( CheckoutComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();

    store = TestBed.inject( Store );
  } );

  it( 'should create', () =>
  {
    expect( component ).toBeTruthy();
  } );

  it( 'should display only shipping-form when step is delivery', () =>
  {
    TestUtils.setCartState( "step", PaymentStep.DELIVERY );

    fixture.detectChanges();

    const element = fixture.debugElement.query( By.directive( ShippingFormComponent ) );
    expect( element ).toBeTruthy();
    expect( ( element.componentInstance as ShippingFormComponent ).directive.name ).toEqual( 'billingInfo' );
    expect( fixture.debugElement.query( By.directive( PaymentFormComponent ) ) ).toBeNull();
    expect( fixture.debugElement.query( By.directive( OrderReviewComponent ) ) ).toBeNull();
  } );

  it( 'should display only payment-form when step is payment', () =>
  {
    TestUtils.setCartState( "step", PaymentStep.PAYMENT );

    fixture.detectChanges();

    const element = fixture.debugElement.query( By.directive( PaymentFormComponent ) );
    expect( element ).toBeTruthy();
    expect( ( element.componentInstance as PaymentFormComponent ).directive.name ).toEqual( 'card' );
    expect( fixture.debugElement.query( By.directive( ShippingFormComponent ) ) ).toBeNull();
    expect( fixture.debugElement.query( By.directive( OrderReviewComponent ) ) ).toBeNull();
  } );

  it( 'should display only order-review when step is review', () =>
  {
    TestUtils.setCartState( "step", PaymentStep.REVIEW );

    fixture.detectChanges();

    const element = fixture.debugElement.query( By.directive( OrderReviewComponent ) );
    expect( element ).toBeTruthy();
    expect( fixture.debugElement.query( By.directive( ShippingFormComponent ) ) ).toBeNull();
    expect( fixture.debugElement.query( By.directive( PaymentFormComponent ) ) ).toBeNull();
  } );

  it( 'should display totals formatted from invoice', () =>
  {
    TestUtils.setCartState( "step", PaymentStep.DELIVERY );
    TestUtils.setCartState( "review", new Invoice( { subTotal: 200, shipping: 5, tax: 36.9, total: 241.9 } ) );

    fixture.detectChanges();

    const subTotal = fixture.debugElement.query( By.css( ".order-summary .row:nth-child(1) .text-end" ) );
    const shipping = fixture.debugElement.query( By.css( ".order-summary .row:nth-child(2) .text-end" ) );
    const tax = fixture.debugElement.query( By.css( ".order-summary .row:nth-child(3) .text-end" ) );
    const total = fixture.debugElement.query( By.css( ".order-summary .row:nth-child(4) .text-end" ) );
    expect( subTotal.nativeElement.innerText ).toBe( '$200.00' );
    expect( shipping.nativeElement.innerText ).toBe( '$5.00' );
    expect( tax.nativeElement.innerText ).toBe( '$36.90' );
    expect( total.nativeElement.innerText ).toBe( '$241.90' );
  } );

  it( 'should display items in review from invoice', () =>
  {
    const invoice = new Invoice( { lines: [ TestUtils.mockInvoiceLine() ] } );
    TestUtils.setCartState( "step", PaymentStep.DELIVERY );
    TestUtils.setCartState( "review", invoice );

    fixture.detectChanges();

    const element = fixture.debugElement.query( By.css( ".order-review .order-items" ) );
    expect( element.children.length ).toEqual( 1 );
    const image = element.children[ 0 ].query( By.css( '.img-fluid' ) );
    expect( image.properties.src ).toContain( invoice.lines[ 0 ].product.images[ 0 ].path );
    const info = element.children[ 0 ].query( By.css( '.order-item-info' ) );
    const expectedInfo = `${ invoice.lines[ 0 ].product.name }\nSize: ${ invoice.lines[ 0 ].size.name }\nQty: 1 @\n$100.00`;
    expect( info.nativeElement.innerText ).toContain( expectedInfo );
  } );
} );
