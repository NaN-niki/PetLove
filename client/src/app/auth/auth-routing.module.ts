import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ProfileComponent } from './profile/profile.component';
import { LogoutComponent } from './logout/logout.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';

const routes: Routes = [
  {path : 'login', component : LoginComponent },
  {path : 'register', component : RegisterComponent },
  {path : 'profile', component : ProfileComponent },
  {path : 'logout', component : LogoutComponent },
  {path : ':id/edit', component : EditProfileComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AuthRoutingModule { }