import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { PetsRoutingModule } from './pets-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    CommonModule,
    PetsRoutingModule
  ],
  exports: [
    CatalogComponent
  ]
})
export class PetsModule { }
