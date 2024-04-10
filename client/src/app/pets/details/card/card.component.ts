import { Component, Input } from '@angular/core';
import { IPet } from 'src/app/interfces';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() pet! : IPet
  editBtn : string = 'Edit'
  deleteBtn : string = 'Delete'
}
