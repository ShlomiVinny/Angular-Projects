import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherEcurrentWeatherComponent } from './weather-ecurrent-weather.component';

describe('WeatherEcurrentWeatherComponent', () => {
  let component: WeatherEcurrentWeatherComponent;
  let fixture: ComponentFixture<WeatherEcurrentWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherEcurrentWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherEcurrentWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
