import { Component, Input, OnInit } from '@angular/core';

@Component( {
  selector: 'btn-link',
  template: '{{label}}',
  styleUrls: [ './button.component.scss' ],
  host: {
    '[class.btn]': 'true',
    '[class.btn-primary]': 'primary',
    '[class.btn-block]': 'block'
  }
} )
export class ButtonComponent implements OnInit
{
  @Input()
  primary: boolean = true;
  @Input()
  block: boolean;
  @Input()
  label: string;
  @Input()
  disabled: boolean;

  constructor() { }

  ngOnInit(): void
  {
  }

}
