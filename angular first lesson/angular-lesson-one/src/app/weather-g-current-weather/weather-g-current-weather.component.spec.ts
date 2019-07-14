import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherGCurrentWeatherComponent } from './weather-g-current-weather.component';

describe('WeatherGCurrentWeatherComponent', () => {
  let component: WeatherGCurrentWeatherComponent;
  let fixture: ComponentFixture<WeatherGCurrentWeatherComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherGCurrentWeatherComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherGCurrentWeatherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
