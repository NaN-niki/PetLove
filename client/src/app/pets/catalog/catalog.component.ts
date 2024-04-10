import { Component, OnInit } from '@angular/core';
import { PetService } from '../pet.service';
import { IPet } from '../../interfces'
import { GlobalLoaderService } from 'src/app/core/global-loader/global-loader.service';

@Component({
  selector: 'app-catalog',
  templateUrl: './catalog.component.html',
  styleUrls: ['./catalog.component.css']
})
export class CatalogComponent implements OnInit {
  pets: IPet[] = []
  detailsBtn : string = 'Details'

  constructor(private petService: PetService, private loaderService : GlobalLoaderService) { }

  ngOnInit(): void {

    this.loaderService.showLoader('Loading')
    this.petService.getAllPets().subscribe( data => {
      this.pets = data
      this.loaderService.hideLoader()
    })
  }
}
