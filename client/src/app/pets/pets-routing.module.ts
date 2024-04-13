import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CatalogComponent } from './catalog/catalog.component';
import { DetailsComponent } from './details/details.component';
import { CreateComponent } from './create/create.component';
import { EditComponent } from './edit/edit.component';
import { authGuardGuard } from '../auth-guard.guard';

const routes: Routes = [
  {path : '', pathMatch:'full', component : CatalogComponent },
  {path : ':id/details', component : DetailsComponent },
  {path : ':id/edit', component : EditComponent },
  {path : 'create',  component : CreateComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PetsRoutingModule { }