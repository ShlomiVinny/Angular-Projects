import { Component, OnInit } from '@angular/core';
import { ViewDataService } from '../view-data.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  constructor( private viewDataService: ViewDataService) { }

  ngOnInit() {
  }

}
