import { Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { matchPasswordGroupValidator } from 'src/app/shared/validators/matchPassword';
import { usernameValidatorFn } from 'src/app/shared/validators/usernameValidatorFn';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { ErrorService } from 'src/app/error.service';

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
    email: ['', [Validators.required, Validators.email]],
    pass: this.fb.group({
      password: ['', [Validators.required, Validators.minLength(6)]],
      rePass: ['']
    }, {
      validators: [matchPasswordGroupValidator('password', 'rePass')]
    })
  })

  get apiError(){
    return this.errorService.apiError
  }

  constructor(private fb: FormBuilder, private authService: AuthService, private router: Router, private errorService : ErrorService) { }

  registerHandler() {
    if (this.registerForm.invalid) { return }

    const { username, firstName, lastName, email, pass: { password, rePass } = {} } = this.registerForm.value

    this.authService.register(username!, firstName!, lastName!, email!, password!).subscribe({
      next: (user) => {
        this.router.navigate(['/'])
      },
      error: (err) => {
        console.log(err.error.message);
      }
    })

  }

  ngOnDestroy(): void {
    this.errorService.apiError$$.next(null)
  }
}
