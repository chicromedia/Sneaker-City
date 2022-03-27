import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CartItemComponent } from './cart-item.component';
import { TestUtils } from "../../../../../test";
import { By } from "@angular/platform-browser";
import { NgxsModule, Store } from "@ngxs/store";
import { CartState } from "../../state-management/cart-state";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { ImageUrlPipe } from "../../../../Shared/pipes/image-url.pipe";
import { RouterTestingModule } from "@angular/router/testing";
import { FormsModule } from "@angular/forms";
import { RemoveProduct, UpdateProduct } from "../../state-management/cart-actions";
import { ICartRequest } from "../../interfaces/cart-request";

describe( 'CartItemComponent', () =>
{
  let component: CartItemComponent;
  let fixture: ComponentFixture<CartItemComponent>;
  let store: Store;

  beforeEach( async () =>
  {
    await TestBed.configureTestingModule( {
      imports: [
        NgxsModule.forRoot( [ CartState ] ),
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule
      ],
      declarations: [
        CartItemComponent,
        ImageUrlPipe
      ]
    } )
      .compileComponents();
  } );

  beforeEach( () =>
  {
    fixture = TestBed.createComponent( CartItemComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();

    store = TestBed.inject( Store );
  } );

  it( 'should create', () =>
  {
    expect( component ).toBeTruthy();
  } );

  it( 'should display thumbnail correctly', () =>
  {
    component.item = TestUtils.mockInvoiceLine();

    fixture.detectChanges();

    const element = fixture.debugElement.query( By.css( 'img.cart-item-thumbnail' ) );
    expect( element ).toBeTruthy();
    expect( element.properties.src ).toContain( component.item.product.images[ 0 ].path );
    expect( element.properties.width ).toEqual( component.thumbnailWidth );
    expect( element.properties.alt ).toEqual( component.item.product.name );
  } );

  it( 'should display price formatted', () =>
  {
    component.item = TestUtils.mockInvoiceLine( 'Test Price', 150 );

    fixture.detectChanges();

    const element = fixture.debugElement.query( By.css( 'div.cart-item-price' ) );
    expect( element ).toBeTruthy();
    expect( element.nativeElement.innerText ).toBe( "$150.00" );
  } );

  it( 'should display mode read only correctly', () =>
  {
    component.item = TestUtils.mockInvoiceLine( 'Test Price', 150 );
    component.readOnly = true;

    fixture.detectChanges();

    const selectorTools = fixture.debugElement.query( By.css( 'div.cart-item-selector-tools' ) );
    const actionFooter = fixture.debugElement.query( By.css( 'div.cart-item-footer' ) );
    expect( selectorTools ).toBeNull();
    expect( actionFooter ).toBeNull();
  } );

  it( 'should dispatch RemoveProduct when the user clicks on action-remove-item', () =>
  {
    component.item = TestUtils.mockInvoiceLine( 'Test Price', 150 );
    const dispatchSpy = spyOn( store, "dispatch" );

    fixture.detectChanges();

    const element = fixture.debugElement.query( By.css( '#action-remove-item' ) );
    element.triggerEventHandler( 'click', element.nativeElement );
    expect( element ).toBeTruthy();
    expect( dispatchSpy ).toHaveBeenCalledWith( new RemoveProduct( component.item.productId ) );
  } );

  it( 'should dispatch UpdateProduct when the user selects a size', () =>
  {
    component.item = TestUtils.mockInvoiceLine( 'Test Price', 150 );
    const dispatchSpy = spyOn( store, "dispatch" );

    fixture.detectChanges();

    const element = fixture.debugElement.query( By.css( '#size-selector' ) );
    element.triggerEventHandler( 'ngModelChange', 10 );
    expect( element ).toBeTruthy();
    expect( dispatchSpy ).toHaveBeenCalledWith(
      new UpdateProduct( { productId: component.item.productId, quantity: component.item.quantity, sizeId: 10, } as ICartRequest )
    );
  } );

  it( 'should dispatch UpdateProduct when the user selects a quantity', () =>
  {
    component.item = TestUtils.mockInvoiceLine( 'Test Price', 150 );
    const dispatchSpy = spyOn( store, "dispatch" );

    fixture.detectChanges();

    const element = fixture.debugElement.query( By.css( '#quantity-selector' ) );
    element.triggerEventHandler( 'ngModelChange', 5 );
    expect( element ).toBeTruthy();
    expect( dispatchSpy ).toHaveBeenCalledWith(
      new UpdateProduct( { productId: component.item.productId, quantity: 5, sizeId: component.item.sizeId, } as ICartRequest )
    );
  } );
} );
