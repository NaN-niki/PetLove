import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';

const routes: Routes = [
  {path : '', pathMatch : 'full', component : HomeComponent},
  {path : 'pets',loadChildren: () => import('./pets/pets.module').then(m => m.PetsModule), data: { animation : 'isRight'}},
  {path : 'auth',loadChildren: () => import('./auth/auth.module').then(m => m.AuthModule), data: { animation : 'isRight'}},
  {path : '**', component : NotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
