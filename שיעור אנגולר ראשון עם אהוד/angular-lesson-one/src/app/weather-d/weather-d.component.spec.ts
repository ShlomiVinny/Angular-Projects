import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WeatherDComponent } from './weather-d.component';

describe('WeatherDComponent', () => {
  let component: WeatherDComponent;
  let fixture: ComponentFixture<WeatherDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WeatherDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WeatherDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
