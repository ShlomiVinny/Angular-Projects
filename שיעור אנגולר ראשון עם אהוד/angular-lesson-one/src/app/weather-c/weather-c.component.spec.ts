import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherCComponent } from './weather-c.component';

describe('WeatherCComponent', () => {
  let component: WeatherCComponent;
  let fixture: ComponentFixture<WeatherCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
