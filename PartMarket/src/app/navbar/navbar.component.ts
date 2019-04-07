import { Component, OnInit } from '@angular/core';
import { ViewDataService } from '../view-data.service';
import { NavbarItem } from '../data models/NavbarItem';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private viewDataService: ViewDataService) { }


  navbarItems: NavbarItem[];
  getNavbarItems() : void{
    this.viewDataService.getNavbarItems();
    console.log('got navbar items:' + navItems);
    return this.navbarItems;
  }
  

  ngOnInit() {
    this.getNavbarItems()
  }

}
