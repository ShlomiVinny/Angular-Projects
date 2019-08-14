import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { OrderConfirmationService } from 'src/app/services/order-confirmation.service';
import { Route } from '@angular/compiler/src/core';

@Component({
  selector: 'app-shipping-details',
  templateUrl: './shipping-details.component.html',
  styleUrls: ['./shipping-details.component.css']
})
export class ShippingDetailsComponent implements OnInit, OnDestroy {
  constructor(private route: ActivatedRoute, private router: Router, private service: OrderConfirmationService) { }

  city: string;
  address: string;
  zipcode: string;
  params: object;
  queryParamSubscription: Subscription;
  data: object;


  shippingForm = new FormGroup({
    city: new FormControl('', [Validators.required]),
    address: new FormControl('', [Validators.required]),
    zipcode: new FormControl('', [Validators.required])
  });


  ngOnInit() {
    this.getQueryParams();
    if (this.params['name'] === "" || this.params['phone'] === "" || this.params['email'] === "") {
      this.navigateTo('orderDetails');
    } 
  }

  ngOnDestroy() {
    this.queryParamSubscription.unsubscribe();
  }

  getShippingFormValues(): void {
    let city = this.shippingForm.controls.city.value;
    let address = this.shippingForm.controls.address.value;
    let zipcode = this.shippingForm.controls.zipcode.value;
    this.setValues(city, address, zipcode)
  }

  setValues(city: string, address: string, zipcode: string): void {
    this.city = city;
    this.address = address;
    this.zipcode = zipcode;

    this.sendDataToService();
  }

  getQueryParams(): void {
    this.queryParamSubscription = this.route.queryParams
      .subscribe(params => {
        this.params = params, console.log(this.params);
      });
  }

  sendDataToService(): void {

    let obj = Object.assign({ city: this.city, address: this.address, zipcode: this.zipcode }, this.params)
    this.service.setNewData(obj);

    this.navigateTo('orderConfirmation');




  }

  navigateTo(url: string): Promise<boolean> {
    return this.router.navigate([url])
  }

}
