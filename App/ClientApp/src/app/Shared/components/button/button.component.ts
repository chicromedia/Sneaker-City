import { Component, Input, OnInit } from '@angular/core';

@Component( {
  selector: 'btn-link',
  styleUrls: [ './button.component.scss' ],
  template: '{{label}}',
  host: {
    '[class.btn]': 'true',
    '[class.btn-primary]': 'primary',
    '[class.btn-outline-secondary]': '!primary',
    '[class.btn-block]': 'block',
    '[disabled]': 'disabled'
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
  @Input()
  loading: boolean;

  constructor() { }

  ngOnInit(): void
  {
  }

}
