import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BankAComponent } from './components/bank-a/bank-a.component';
import { BankBComponent } from './components/bank-b/bank-b.component';
import { BankCComponent } from './components/bank-c/bank-c.component';
import { BankDComponent } from './components/bank-d/bank-d.component';
import { MtSecureDirective } from './directives/mt-secure.directive';

@NgModule({
  declarations: [
    AppComponent,
    BankAComponent,
    BankBComponent,
    BankCComponent,
    BankDComponent,
    MtSecureDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
