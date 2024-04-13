import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CatalogComponent } from './catalog/catalog.component';
import { PetsRoutingModule } from './pets-routing.module';
import { RouterModule } from '@angular/router';
import { DetailsComponent } from './details/details.component';
import { CardComponent } from './details/card/card.component';
import { SharedModule } from '../shared/shared.module';
import { CreateComponent } from './create/create.component';
import { FormsModule } from '@angular/forms';
import { EditComponent } from './edit/edit.component';



@NgModule({
  declarations: [
    CatalogComponent,
    DetailsComponent,
    CardComponent,
    CreateComponent,
    EditComponent
  ],
  imports: [
    CommonModule,
    PetsRoutingModule,
    SharedModule,
    FormsModule
  ],
  exports: [
    CatalogComponent
  ]
})
export class PetsModule { }
