import { Component, OnInit, OnChanges } from '@angular/core';
import { CityInfo } from '../weather-flist-cities/city-info.model';

@Component({
  selector: 'app-weather-g-current-weather',
  templateUrl: './weather-g-current-weather.component.html',
  styleUrls: ['./weather-g-current-weather.component.css']
})
export class WeatherGCurrentWeatherComponent implements OnInit, OnChanges {

  cityInfo: CityInfo;
  shaharG = 1;

  constructor() { }

  ngOnInit() {
    this.cityInfo = new CityInfo();
    this.logShaharG();
  }

  ngOnChanges(){
    this.logShaharG();
  }

  setChosenCityInfo(cityInfoOutput: CityInfo): void {
    console.log(cityInfoOutput);
    this.cityInfo = cityInfoOutput;
  }

  getNumberOfCitiesToShow(): number {
    return this.shaharG;
  }

  logShaharG() {
    console.log("shaharG: ")
    console.log(this.shaharG);
  }


}
