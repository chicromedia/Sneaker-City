import { ComponentFixture, TestBed } from '@angular/core/testing';
import { DetailsComponent } from './details.component';
import { NgxsModule } from "@ngxs/store";
import { CartState } from "../cart/state-management/cart-state";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe( 'DetailsComponent', () =>
{
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach( async () =>
  {
    await TestBed.configureTestingModule( {
      imports: [
        HttpClientTestingModule,
        NgxsModule.forRoot( [ CartState ] )
      ],
      declarations: [ DetailsComponent ]
    } )
      .compileComponents();
  } );

  beforeEach( () =>
  {
    fixture = TestBed.createComponent( DetailsComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () =>
  {
    expect( component ).toBeTruthy();
  } );
} );
