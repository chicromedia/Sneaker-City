import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ShippingFormComponent } from './shipping-form.component';
import { FormControl, FormGroup, FormGroupName, ReactiveFormsModule } from "@angular/forms";
import { NgxsModule } from "@ngxs/store";
import { CartState } from "../../state-management/cart-state";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe( 'ShippingFormComponent', () =>
{
  let component: ShippingFormComponent;
  let fixture: ComponentFixture<ShippingFormComponent>;

  beforeEach( async () =>
  {
    await TestBed.configureTestingModule( {
      imports: [
        HttpClientTestingModule,
        NgxsModule.forRoot( [ CartState ] ),
        ReactiveFormsModule
      ],
      declarations: [ ShippingFormComponent ]
    } )
      .overrideComponent( ShippingFormComponent, {
        set: { providers: [ FormGroupName ] }
      } )
      .compileComponents();
  } );

  beforeEach( () =>
  {
    fixture = TestBed.createComponent( ShippingFormComponent );
    component = fixture.componentInstance;
    spyOnProperty( component.directive, "control", "get" ).and.returnValue( new FormGroup( {
      firstName: new FormControl( '' ),
      lastName: new FormControl( '' ),
      address: new FormControl( '' ),
      city: new FormControl( '' ),
      state: new FormControl( '' ),
      zip: new FormControl( '' ),
      email: new FormControl( '' ),
      phone: new FormControl( '' ),
    } ) );
    fixture.detectChanges();
  } );

  it( 'should create', () =>
  {
    expect( component ).toBeTruthy();
  } );
} );
