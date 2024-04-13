import { Component, Input } from '@angular/core';
import { AuthService } from 'src/app/auth/auth.service';
import { IPet } from 'src/app/interfces';
import { PetService } from '../../pet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {
  @Input() pet! : IPet
  editBtn : string = 'Edit'
  deleteBtn : string = 'Delete'

  constructor(private authService : AuthService, private petService : PetService, private router: Router){}

  get owner(){
    return this.authService.user?._id == this.pet.owner
  }

  deleteHandler() {
    if(window.confirm('Are you sure you want to delete this?')){   /// TOAST
      this.petService.deletePet(this.pet._id).subscribe({
        next: () => {
          this.router.navigate(['/pets'])
        }
      })
    }
    
  }
}
