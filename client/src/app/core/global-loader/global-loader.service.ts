import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalLoaderService {

  title: string | null = 'Hello'

  constructor() { }

  showLoader(title: string) {
    this.title = title
  }

  hideLoader(){
    this.title = null
  }
}
