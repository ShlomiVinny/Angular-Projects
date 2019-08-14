import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderDetailsComponent } from './components/order-details/order-details.component';
import { ShippingDetailsComponent } from './components/shipping-details/shipping-details.component';
import { OrderConfirmationComponent } from './components/order-confirmation/order-confirmation.component';


const routes: Routes = [
  {path:'', redirectTo: 'orderDetails', pathMatch: 'full'},
  {path:'orderDetails', component: OrderDetailsComponent},
  {path:'shippingDetails', component: ShippingDetailsComponent},
  {path: 'orderConfirmation', component: OrderConfirmationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
