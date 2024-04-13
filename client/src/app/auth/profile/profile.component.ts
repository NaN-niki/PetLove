import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { IUser } from 'src/app/interfces';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user: IUser | undefined
  editBtn = 'Edit'
  constructor(private authService: AuthService) { }
  ngOnInit(): void {
    this.user = this.authService.user
  }

}
