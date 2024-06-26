import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SpinnerComponent } from './spinner/spinner.component';
import { ButtonComponent } from './button/button.component';
import { UsernameDirective } from './validators/username.directive';
import { MinCountDirective } from './validators/min-count.directive';
import { UrlValidateDirective } from './validators/url-validate.directive';
import { ContactDirective } from './validators/contact.directive';
import { ShortenPipe } from './shorten.pipe';


@NgModule({
  declarations: [
    SpinnerComponent,
    ButtonComponent,
    UsernameDirective,
    MinCountDirective,
    UrlValidateDirective,
    ContactDirective,
    ShortenPipe
  ],
  imports: [
    CommonModule
  ],
  exports : [
    SpinnerComponent,
    ButtonComponent,
    UsernameDirective,
    MinCountDirective,
    UrlValidateDirective,
    ContactDirective,
    ShortenPipe
  ]
})
export class SharedModule { }
