import { Component, OnInit } from '@angular/core';
import { CityInfo } from '../weather-flist-cities/city-info.model';

@Component({
  selector: 'app-weather-g-current-weather',
  templateUrl: './weather-g-current-weather.component.html',
  styleUrls: ['./weather-g-current-weather.component.css']
})
export class WeatherGCurrentWeatherComponent implements OnInit {

  cityInfo: CityInfo;
  numberOfCitiesToShow = 1;

  constructor() { }

  ngOnInit() {
    this.cityInfo = new CityInfo();
  }

  setChosenCityInfo(cityInfoOutput: CityInfo): void {
    console.log(cityInfoOutput);
    this.cityInfo = cityInfoOutput;
  }

  getNumberOfCitiesToShow(): number {
    return this.numberOfCitiesToShow;
  }
}
