import { Component, OnInit, NgZone } from '@angular/core';
import { WeatherInfo } from './weather-info.model';

@Component({
  selector: 'app-weather-c',
  templateUrl: './weather-c.component.html',
  styleUrls: ['./weather-c.component.css']
})
export class WeatherCComponent implements OnInit {

  weatherInfos: Array<WeatherInfo>;
  counter = 0;
  city = 'eilat';

  constructor(public zone: NgZone) {
    this.weatherInfos = new Array<WeatherInfo>();
  }

  ngOnInit() {
    this.weatherInfos.push({'city': 'tel-aviv', 'temperature': 35});

    const weatherInfo = new WeatherInfo();
    weatherInfo.city = 'tokyo';
    weatherInfo.temperature = 22;
    this.weatherInfos.push(weatherInfo);

    // setInterval(() => console.log('ehud'), 10);
    // setInterval(() => '', 1000);
    // setInterval(() => this.justClick(), 1000);
    // setInterval(() => this.counter++, 100);
    setInterval(() => this.zone.run(() => ''), 10000);
  }

  justClick() {}

}
