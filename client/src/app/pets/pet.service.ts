import { Injectable } from '@angular/core';
import { IPet } from '../interfces';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment.development'

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private http : HttpClient) { }

  apiUrl : string = environment.apiUrl + '/pets'

  getAllPets = () => this.http.get<IPet[]>(this.apiUrl)
  getOnePet = (petId: string) => this.http.get<IPet>(this.apiUrl + '/' + petId)
  addPet = (animalType : string, breed: string, name: string, skin_color:string, imageUrl: string, description:string, contactInfo: number, address: number) => 
  this.http.post(`${this.apiUrl}/create`, {
    animalType, breed, name, skin_color, imageUrl, description, contactInfo, address
  })
  editPet = (animalType : string, breed: string, name: string, skin_color:string, imageUrl: string, description:string, contactInfo: number, address: number, id: string) => 
  this.http.put(`${this.apiUrl}/${id}`, {
    animalType, breed, name, skin_color, imageUrl, description, contactInfo, address
  })
}
