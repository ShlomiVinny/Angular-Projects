import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, MinLengthValidator } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent implements OnInit {
  constructor(private router: Router) { }

  name: string;
  phone: string;
  email: string;

  orderForm = new FormGroup({
    name: new FormControl('', [Validators.required, Validators.minLength(4)]),
    phone: new FormControl('', [Validators.required, Validators.minLength(9)]),
    email: new FormControl('', [Validators.required, Validators.email])
  });

  ngOnInit(): void {
  }

  getOrderFormValues(): void {
    let name = this.orderForm.controls.name.value;
    let phone = this.orderForm.controls.phone.value;
    let email = this.orderForm.controls.email.value;
    this.setValues(name, phone, email)
  }

  setValues(name: string, phone: string, email: string): void {
    this.name = name;
    this.phone = phone;
    this.email = email;
    this.sendOrderDetailsToShippingDetails();
  }

sendOrderDetailsToShippingDetails(){
  this.router.navigate(['/shippingDetails'],{queryParams:{name: this.name, phone: this.phone, email: this.email}})
}


}
