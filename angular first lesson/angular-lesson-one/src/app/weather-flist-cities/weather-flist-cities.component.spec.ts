import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherFlistCitiesComponent } from './weather-flist-cities.component';

describe('WeatherFlistCitiesComponent', () => {
  let component: WeatherFlistCitiesComponent;
  let fixture: ComponentFixture<WeatherFlistCitiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherFlistCitiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherFlistCitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
