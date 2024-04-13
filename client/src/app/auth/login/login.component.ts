import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  @Input() submitBtn: string = 'Submit'
  constructor(private activatedRoute: ActivatedRoute){}

  loginHandler(form: NgForm){
    if(form.invalid){return}

    const returnUrl = this.activatedRoute.snapshot.queryParams['returnUrl'] || '/' // ako imash zakachen queryParams koito da se kazva 'returnUrl'

    const { username,  password } = form.value
    // this.authService.login( username!, password!).subscribe({
    //   next : (user) => {
    //     this.store.dispatch(loadUsers())
    //     this.router.navigate([returnUrl])
    //   },
    //   error : (err) => {
    //     //console.log(err.message)
    //   }
    // })

    form.reset()
  }
  ngOnDestroy(): void {
    // this.errorService.apiError$$.next(null)
  }
}
