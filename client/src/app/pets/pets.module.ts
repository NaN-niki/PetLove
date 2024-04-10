import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { PetsRoutingModule } from './pets-routing.module';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { CardComponent } from './details/card/card.component';
import { SharedModule } from '../shared/shared.module';



@NgModule({
  declarations: [
    CatalogComponent,
    DetailsComponent,
    CardComponent
  ],
  imports: [
    CommonModule,
    PetsRoutingModule,
    SharedModule
  ],
  exports: [
    CatalogComponent
  ]
})
export class PetsModule { }
