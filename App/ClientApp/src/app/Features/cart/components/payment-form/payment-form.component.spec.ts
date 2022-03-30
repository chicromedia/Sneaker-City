import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PaymentFormComponent } from './payment-form.component';
import { FormControl, FormGroup, FormGroupName, ReactiveFormsModule } from "@angular/forms";
import { NgxsModule } from "@ngxs/store";
import { CartState } from "../../state-management/cart-state";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe( 'PaymentFormComponent', () =>
{
  let component: PaymentFormComponent;
  let fixture: ComponentFixture<PaymentFormComponent>;

  beforeEach( async () =>
  {
    await TestBed.configureTestingModule( {
      imports: [
        ReactiveFormsModule,
        NgxsModule.forRoot( [ CartState ] ),
        HttpClientTestingModule
      ],
      declarations: [ PaymentFormComponent ]
    } )
      .overrideComponent( PaymentFormComponent, {
        set: { providers: [ FormGroupName ] }
      } )
      .compileComponents();
  } );

  beforeEach( () =>
  {
    fixture = TestBed.createComponent( PaymentFormComponent );
    component = fixture.componentInstance;
    spyOnProperty( component.directive, "control", "get" ).and.returnValue( new FormGroup( {
      number: new FormControl( '' ),
      expire: new FormControl( '' ),
      secureCode: new FormControl( '' )
    } ) );
    fixture.detectChanges();
  } );

  it( 'should create', () =>
  {
    expect( component ).toBeTruthy();
  } );
} );
