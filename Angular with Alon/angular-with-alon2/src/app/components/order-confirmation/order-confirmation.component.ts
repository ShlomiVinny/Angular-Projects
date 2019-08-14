import { Component, OnInit, OnDestroy } from '@angular/core';
import { OrderConfirmationService } from 'src/app/services/order-confirmation.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-order-confirmation',
  templateUrl: './order-confirmation.component.html',
  styleUrls: ['./order-confirmation.component.css']
})
export class OrderConfirmationComponent implements OnInit, OnDestroy {
  constructor(private service: OrderConfirmationService) { }


  data: object;
  Subscription: Subscription = this.service.getData().subscribe(data => this.setData(data));


  ngOnInit() {
    this.Subscription = this.service.getData().subscribe(data => this.setData(data));
  }

  ngOnDestroy() {
    this.Subscription.unsubscribe();
  }

  setData(data: object): void {
    this.data = data;
  }
}
