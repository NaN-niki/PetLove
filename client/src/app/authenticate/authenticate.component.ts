import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth/auth.service';
import { GlobalLoaderService } from '../core/global-loader/global-loader.service';

@Component({
  selector: 'app-authenticate',
  templateUrl: './authenticate.component.html',
  styleUrls: ['./authenticate.component.css']
})
export class AuthenticateComponent implements OnInit {
  isAuthenticating = true

  constructor(private service: AuthService, public loaderService: GlobalLoaderService) { 
    loaderService.showLoader('Loading...')
  }

  ngOnInit(): void {
    this.service.getProfileInfo().subscribe({
      next: () => {
        this.isAuthenticating = false
        this.loaderService.hideLoader()
      },
      error: () => {
        this.service.user = undefined
        this.isAuthenticating = false
        this.loaderService.hideLoader()
      }
    })
  }

}
