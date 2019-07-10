import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherBComponent } from './weather-b.component';

describe('WeatherBComponent', () => {
  let component: WeatherBComponent;
  let fixture: ComponentFixture<WeatherBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
