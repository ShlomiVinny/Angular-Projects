import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MainViewComponent } from './main-view/main-view.component';
import { NavbarComponent } from './navbar/navbar.component';
import { NavbarItem } from './data models/NavbarItem';

@NgModule({
  declarations: [
    AppComponent,
    MainViewComponent,
    NavbarComponent,
    NavbarItem
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
