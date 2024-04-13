import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appContact]',
  providers : [
    {
      provide : NG_VALIDATORS,
      useExisting : ContactDirective,
      multi :true
    }
  ]
})
export class ContactDirective implements Validator{

  regexp = /^\+359\d{9}$/g
  constructor() { }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.regexp.test(control.value) || control.value == "" ? null : { contactError: 'Number must be 10 digits long and start with +359'}
  }
}
