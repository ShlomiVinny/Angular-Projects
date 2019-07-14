import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-weather-d',
  templateUrl: './weather-d.component.html',
  styleUrls: ['./weather-d.component.css']
})
export class WeatherDComponent implements OnInit {

  name = '';

  constructor() { }

  ngOnInit() {
  }

  doNothing() {

  }

  updateName(event: any) {
    this.name = <string>event.target.value;
  }

  updateNameV2(value: string) {
    console.log('name changed');
    this.name = value;
  }

}
