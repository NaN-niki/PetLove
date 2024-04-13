import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { ButtonComponent } from './button/button.component';
import { UsernameDirective } from './validators/username.directive';
import { MinCountDirective } from './validators/min-count.directive';


@NgModule({
  declarations: [
    SpinnerComponent,
    ButtonComponent,
    UsernameDirective,
    MinCountDirective
  ],
  imports: [
    CommonModule
  ],
  exports : [
    SpinnerComponent,
    ButtonComponent,
    UsernameDirective,
    MinCountDirective
  ]
})
export class SharedModule { }
