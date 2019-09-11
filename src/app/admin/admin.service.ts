import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  theater = {
    name: '',
    location: '',
    screen: null
  };

  constructor() { }
}
