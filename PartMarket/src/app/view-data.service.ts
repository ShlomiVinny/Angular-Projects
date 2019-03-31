import { Injectable } from '@angular/core';
import { navbarItems } from 'src/assets/NavbarItems';

@Injectable({
  providedIn: 'root'
})
export class ViewDataService {

  getNavbarItems(){
    return navbarItems;
  }

  constructor() { }
}
