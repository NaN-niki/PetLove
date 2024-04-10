import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { ButtonComponent } from './button/button.component';


@NgModule({
  declarations: [
    SpinnerComponent,
    ButtonComponent
  ],
  imports: [
    CommonModule
  ],
  exports : [
    SpinnerComponent,
    ButtonComponent
  ]
})
export class SharedModule { }
