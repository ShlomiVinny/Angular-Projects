import { Component, OnInit } from '@angular/core';
import { BalanceRequestInfo } from './balance-request-info';

@Component({
  selector: 'app-bank-b',
  templateUrl: './bank-b.component.html',
  styleUrls: ['./bank-b.component.css']
})
export class BankBComponent implements OnInit {

  balanceRequestInfo = new BalanceRequestInfo();
  failedMandatoryConditionIndicator = false;
  direction = new Array<string>();

  constructor() { }

  ngOnInit() {
    this.direction.push('incoming');
    this.direction.push('outgoing');
  }

  executeBalanceRequest(): void {
    console.log('calling rest service with: ' + this.balanceRequestInfo.toString());
  }

  get diagnostic() { return JSON.stringify(this.balanceRequestInfo); }
}
