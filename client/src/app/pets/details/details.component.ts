import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { IPet } from 'src/app/interfces';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit{
  pet!: IPet 
  petId! : string
  constructor(private petService: PetService, private activatedRoute : ActivatedRoute) { }


  ngOnInit(): void {
    this.petId = this.activatedRoute.snapshot.params['id']
    this.petService.getOnePet(this.petId).subscribe( data => {
      this.pet = data
    })
  }
}
