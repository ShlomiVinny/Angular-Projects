import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from "./components/main-page/main-page.component";
import { CustomContextMenuComponent } from './components/custom-context-menu/custom-context-menu.component';
import { DisplayLoadAmmoService } from './services/display-load-ammo.service';
import { LoadAmmoComponent } from './components/load-ammo/load-ammo.component';
import {DragDropModule} from '@angular/cdk/drag-drop';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    CustomContextMenuComponent,
    LoadAmmoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DragDropModule
  ],
  providers: [DisplayLoadAmmoService],
  bootstrap: [AppComponent]
})
export class AppModule { }
