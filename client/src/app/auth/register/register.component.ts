import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { matchPasswordGroupValidator } from 'src/app/shared/validators/matchPassword';
import { usernameValidatorFn } from 'src/app/shared/validators/usernameValidatorFn';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  @Input() submitBtn: string = 'Submit'

  registerForm = this.fb.group({
    username: ['', [Validators.required, usernameValidatorFn()]],
    firstName: ['', [Validators.required, Validators.minLength(2)]],
    lastName: ['', [Validators.required, Validators.minLength(2)]],
    email : ['', [Validators.required, Validators.email]],
    pass: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      rePass: ['']
    }, {
      validators : [matchPasswordGroupValidator('password', 'rePass')]
    })
  })

  constructor(private fb : FormBuilder){}

  registerHandler(){

  }
}
