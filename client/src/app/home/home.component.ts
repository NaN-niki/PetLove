import { Component } from '@angular/core';
import { AuthService } from '../auth/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  constructor(private authService: AuthService) { 
   
  }

  get isLoggedIn(): boolean {
    return this.authService.isLogged;
  }

  get firstName(): string {
    return this.authService.user?.firstName || '';
  }
}
