import { Directive } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator } from '@angular/forms';


@Directive({
  selector: '[appUsername]',
  providers: [
    {
      provide: NG_VALIDATORS,
      useExisting : UsernameDirective,
      multi: true
    } 
  ]
})
export class UsernameDirective implements Validator {

  constructor() { }

  validate(control: AbstractControl<any, any>): ValidationErrors | null {
    return (control.value == '' || /^(?=.*\d).{6,}$/.test(control.value)) ? null : { appUsernameError: true }
  }

}
