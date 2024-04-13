import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { ErrorService } from 'src/app/error.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input() submitBtn: string = 'Submit'
  get apiError(){
    return this.errorService.apiError
  }

  constructor(private activatedRoute: ActivatedRoute, private authService : AuthService, private router : Router, private errorService : ErrorService){}

  loginHandler(form: NgForm){
    if(form.invalid){return}

    const returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/' // ako imash zakachen queryParams koito da se kazva 'returnUrl'

    const { username,  password } = form.value
    this.authService.login( username!, password!).subscribe({
      next : (user) => {
        this.router.navigate([returnUrl])
      }
    })

    form.reset()
  }
  ngOnDestroy(): void {
    this.errorService.apiError$$.next(null)
  }
}
