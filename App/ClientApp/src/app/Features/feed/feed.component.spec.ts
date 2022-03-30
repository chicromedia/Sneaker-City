import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FeedComponent } from './feed.component';
import { NgxsModule } from "@ngxs/store";
import { CartState } from "../cart/state-management/cart-state";
import { HttpClientTestingModule } from "@angular/common/http/testing";

describe( 'FeedComponent', () =>
{
  let component: FeedComponent;
  let fixture: ComponentFixture<FeedComponent>;

  beforeEach( async () =>
  {
    await TestBed.configureTestingModule( {
      imports: [
        HttpClientTestingModule,
        NgxsModule.forRoot( [ CartState ] )
      ],
      declarations: [ FeedComponent ]
    } )
      .compileComponents();
  } );

  beforeEach( () =>
  {
    fixture = TestBed.createComponent( FeedComponent );
    component = fixture.componentInstance;
    fixture.detectChanges();
  } );

  it( 'should create', () =>
  {
    expect( component ).toBeTruthy();
  } );
} );
