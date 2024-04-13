import { Directive, Input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appMinCount]',
  providers: [
    {
      provide : NG_VALIDATORS,
      useExisting : MinCountDirective,
      multi : true
    }
  ]
})
export class MinCountDirective implements Validator {

  @Input() appMinCount!: Number 

  constructor() { }


  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return control.value.length >= this.appMinCount || control.value == '' ? null : {minValueError: `Field should be at least ${this.appMinCount} characters long`}
  }

}
