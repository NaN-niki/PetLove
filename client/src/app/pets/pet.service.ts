import { Injectable } from '@angular/core';
import { IPet } from '../interfces';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PetService {

  constructor(private http : HttpClient) { }

  getAllPets = () => this.http.get<IPet[]>('/api/pets')
  getOnePet = (petId: string) => this.http.get<IPet>(`/api/pets/${petId}`)
  addPet = (animalType : string, breed: string, name: string, skin_color:string, imageUrl: string, description:string, contactInfo: number, address: number) => 
  this.http.post(`/api/pets/create`, {
    animalType, breed, name, skin_color, imageUrl, description, contactInfo, address
  })
  editPet = (animalType : string, breed: string, name: string, skin_color:string, imageUrl: string, description:string, contactInfo: number, address: number, id: string) => 
  this.http.put(`/api/pets/${id}`, {
    animalType, breed, name, skin_color, imageUrl, description, contactInfo, address
  })
}
