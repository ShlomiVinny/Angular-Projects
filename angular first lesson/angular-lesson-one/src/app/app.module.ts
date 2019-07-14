import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WeatherAComponent } from './weather-a/weather-a.component';
import { WeatherBComponent } from './weather-b/weather-b.component';
import { WeatherCComponent } from './weather-c/weather-c.component';
import { WeatherDComponent } from './weather-d/weather-d.component';
import { FormsModule } from '@angular/forms';
import { WeatherEcurrentWeatherComponent } from './weather-ecurrent-weather/weather-ecurrent-weather.component';
import { WeatherFlistCitiesComponent } from './weather-flist-cities/weather-flist-cities.component';
import { WeatherGCurrentWeatherComponent } from './weather-g-current-weather/weather-g-current-weather.component';
import { WeatherHComponent } from './weather-h/weather-h.component';

@NgModule({
  declarations: [
    AppComponent,
    WeatherAComponent,
    WeatherBComponent,
    WeatherCComponent,
    WeatherDComponent,
    WeatherEcurrentWeatherComponent,
    WeatherFlistCitiesComponent,
    WeatherGCurrentWeatherComponent,
    WeatherHComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
