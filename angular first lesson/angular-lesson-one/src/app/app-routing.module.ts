import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WeatherAComponent } from './weather-a/weather-a.component';
import { WeatherBComponent } from './weather-b/weather-b.component';
import { WeatherCComponent } from './weather-c/weather-c.component';
import { WeatherDComponent } from './weather-d/weather-d.component';
import { WeatherFlistCitiesComponent } from './weather-flist-cities/weather-flist-cities.component';
import { WeatherEcurrentWeatherComponent } from './weather-ecurrent-weather/weather-ecurrent-weather.component';
import { WeatherGCurrentWeatherComponent } from './weather-g-current-weather/weather-g-current-weather.component';
import { WeatherHComponent } from './weather-h/weather-h.component';

const routes: Routes = [
  { path: 'weatherA',   component: WeatherAComponent, pathMatch: 'full' },
  { path: 'weatherB',   component: WeatherBComponent, pathMatch: 'full' },
  { path: 'weatherC',   component: WeatherCComponent, pathMatch: 'full' },
  { path: 'weatherD',   component: WeatherDComponent, pathMatch: 'full' },
  { path: 'weatherE',   component: WeatherEcurrentWeatherComponent, pathMatch: 'full' },
  { path: 'weatherF',   component: WeatherFlistCitiesComponent, pathMatch: 'full' },
  { path: 'weatherG',   component: WeatherGCurrentWeatherComponent, pathMatch: 'full' },
  { path: 'weatherH',   component: WeatherHComponent, pathMatch: 'full' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { enableTracing: false })],
  exports: [RouterModule]
})

export class AppRoutingModule { }
