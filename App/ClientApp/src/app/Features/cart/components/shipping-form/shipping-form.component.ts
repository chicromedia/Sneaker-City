import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from "@angular/forms";

@Component( {
  selector: 'shipping-form',
  templateUrl: './shipping-form.component.html',
  styleUrls: [ './shipping-form.component.scss' ]
} )
export class ShippingFormComponent implements OnInit
{

  public formGroup: FormGroup;

  constructor( private fb: FormBuilder ) { }

  ngOnInit(): void
  {
    this.formGroup = this.fb.group( {
      firstName: [ '' ],
      lastName: [ '' ],
      address: [ '' ],
      city: [ '' ],
      state: [ '' ],
      zip: [ '' ],
      email: [ '' ],
      phone: [ '' ],
    } );
  }

}
