import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';

@Directive({
  selector: '[appUrlValidate]',
  providers : [
    {
      provide : NG_VALIDATORS,
      useExisting : UrlValidateDirective,
      multi: true
    }
  ]
})

export class UrlValidateDirective implements Validator{

  regexp = /^https?:\/\/.*$/g

  constructor() { }
  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return this.regexp.test(control.value) || control.value == '' ? null : { urlError: 'Url must start with http:// or https://'}
  }
}
