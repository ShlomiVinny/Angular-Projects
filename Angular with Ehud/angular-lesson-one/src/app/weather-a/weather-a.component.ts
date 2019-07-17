import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-a',
  templateUrl: './weather-a.component.html',
  styleUrls: ['./weather-a.component.css']
})
export class WeatherAComponent implements OnInit {

  currentWeather: number;

  constructor() {
    this.currentWeather = 21;
   }

  ngOnInit() {
    this.currentWeather = 31;
  }

  showColderWeather(): number {
    return this.currentWeather - 10;
  }

  makeColderWeather() {
    const methodMember = this.currentWeather - 10;
  }

  makeColderWeatherV2(): number {
    const methodMember = this.currentWeather - 10;
    return methodMember;
  }

  makeColderWeatherRightWay() {
    this.currentWeather = this.currentWeather - 10;
  }

  doNothing() {

  }

}
