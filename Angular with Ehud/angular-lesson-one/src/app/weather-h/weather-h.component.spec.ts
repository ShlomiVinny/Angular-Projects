import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherHComponent } from './weather-h.component';

describe('WeatherHComponent', () => {
  let component: WeatherHComponent;
  let fixture: ComponentFixture<WeatherHComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherHComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherHComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
