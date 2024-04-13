import { Component, Input, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { PetService } from '../pet.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {

  @Input() submitBtn = 'Submit'

  constructor(private petService: PetService, private router: Router) { }

  ngOnInit(): void {

  }

  createHandler(form: NgForm) {
    if (form.invalid) { return }

    const { animalType, breed, name, skin_color, imageUrl, description, contactInfo, address } = form.value

    console.log(animalType, breed, name, skin_color, imageUrl, description, contactInfo, address)

    this.petService.addPet(animalType, breed, name, skin_color, imageUrl, description, contactInfo, address).subscribe({
      next: () => {
        this.router.navigate(['/pets'])
      },
      error: () => {
        console.log()
      }
    })
  }


}
