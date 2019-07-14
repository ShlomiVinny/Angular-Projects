import { Component, OnInit, Input } from '@angular/core';
import { CustomerInfo } from './customer-info.model';


@Component({
  selector: 'app-weather-h',
  templateUrl: './weather-h.component.html',
  styleUrls: ['./weather-h.component.css']
})
export class WeatherHComponent implements OnInit {


  customerInfo = new CustomerInfo();

  constructor() { }

  ngOnInit() {
  }

  changeCustomerFirstName(firstName: string): void {
    this.customerInfo.firstName = firstName;
  }


 
}
