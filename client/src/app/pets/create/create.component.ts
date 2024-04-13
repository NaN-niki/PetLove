import { Component, Input } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent {

  @Input() submitBtn = 'Submit'

  createHandler(form : NgForm){

  }
}
