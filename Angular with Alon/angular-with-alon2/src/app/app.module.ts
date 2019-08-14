import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { ShippingDetailsComponent } from './components/shipping-details/shipping-details.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';
import { OrderConfirmationService } from './services/order-confirmation.service';


@NgModule({
  declarations: [
    AppComponent,
    OrderDetailsComponent,
    ShippingDetailsComponent,
    OrderConfirmationComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [OrderConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
