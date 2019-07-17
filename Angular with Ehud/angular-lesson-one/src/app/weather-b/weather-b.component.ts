import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-b',
  templateUrl: './weather-b.component.html',
  styleUrls: ['./weather-b.component.css']
})
export class WeatherBComponent implements OnInit {

  imageurl: string;
  isDisabled: boolean;

  constructor() { }

  ngOnInit() {
    this.imageurl = 'https://ssl.gstatic.com/onebox/weather/64/partly_cloudy.png';
    this.isDisabled = false;
  }

  getIsDisabled(): boolean {
    return this.isDisabled;
  }

  makeDisabled(): void {
    this.isDisabled = true;
  }

  makeDisabledV2(): boolean {
    this.isDisabled = true;
    return this.isDisabled;
  }
}
