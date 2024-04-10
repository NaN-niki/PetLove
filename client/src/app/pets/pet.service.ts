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
}
