import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { CityInfo } from './city-info.model';

@Component({
  selector: 'app-weather-flist-cities',
  templateUrl: './weather-flist-cities.component.html',
  styleUrls: ['./weather-flist-cities.component.css']
})
export class WeatherFlistCitiesComponent implements OnInit {

  cityInfos: Array<CityInfo>;
  @Output() cityChosenEvent = new EventEmitter<CityInfo>();
  @Input()  numberOfCitiesToShow: number;

  constructor() { }

  ngOnInit() {

    this.resetModel();

    this.cityInfos = this.cityInfos.slice(this.numberOfCitiesToShow);
  }

  cityChosen(index: number): void {
    console.log(index + ':::' + this.cityInfos[index].city);
    this.cityChosenEvent.emit(this.cityInfos[index]);
  }

  private resetModel() {
    this.cityInfos = new Array<CityInfo>();
    let cityInfo = new CityInfo();
    cityInfo.city = 'tel-aviv';
    cityInfo.nation = 'israel';
    cityInfo.continent = 'asia';
    this.cityInfos.push(cityInfo);
    cityInfo = new CityInfo();
    cityInfo.city = 'vienna';
    cityInfo.nation = 'austria';
    cityInfo.continent = 'europe';
    this.cityInfos.push(cityInfo);
    cityInfo = new CityInfo();
    cityInfo.city = 'new york';
    cityInfo.nation = 'usa';
    cityInfo.continent = 'america';
    this.cityInfos.push(cityInfo);
  }

}
