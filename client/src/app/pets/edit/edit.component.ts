import { Component, Input } from '@angular/core';
import { PetService } from '../pet.service';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent {
  @Input() submitBtn = 'Submit'
  id = this.activatedRoute.snapshot.params['id']

  constructor(private petService: PetService, private router: Router, private activatedRoute : ActivatedRoute) { }

  ngOnInit(): void {

  }

  editHandler(form: NgForm) {
    if (form.invalid) { return }

    const { animalType, breed, name, skin_color, imageUrl, description, contactInfo, address } = form.value

    // this.petService.editPet(animalType, breed, name, skin_color, imageUrl, description, contactInfo, address, this.id).subscribe({
    //   next: () => {
    //     this.router.navigate([`/${this.id}/details`])
    //   },
    //   error: () => {
    //     console.log()
    //   }
    // })
  }

}
