import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { IUser } from 'src/app/interfces';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent {
  user: IUser | undefined
  submitBtn = 'Submit'
  id = this.activatedRoute.snapshot.params['id']

  constructor(private authService: AuthService, private router: Router, private activatedRoute : ActivatedRoute) { }
  ngOnInit(): void {
    this.user = this.authService.user
  }

  editHandler(form : NgForm){

    if (form.invalid) { return }

    const { firstName, lastName, email, username } = form.value

    this.authService.editProfileInfo(firstName, lastName, email, username).subscribe({
      next: () => {
        this.router.navigate([`/auth/profile`])
      },
      error: () => {
        console.log()
      }
    })
  }

}
