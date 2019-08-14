import { Component, OnInit } from '@angular/core';
import { BalanceRequestInfo } from './balance-request-info';

@Component({
  selector: 'app-bank-a',
  templateUrl: './bank-a.component.html',
  styleUrls: ['./bank-a.component.css']
})
export class BankAComponent implements OnInit {

  balanceRequestInfo: BalanceRequestInfo;
  failedMandatoryConditionIndicator: boolean;
  direction: Array<string>;

  constructor() {
    this.balanceRequestInfo = new BalanceRequestInfo();
    this.failedMandatoryConditionIndicator = false;
    this.direction = new Array<string>();
  }

  ngOnInit() {
    this.direction.push('incoming');
    this.direction.push('outgoing');
  }

  executeBalanceRequest(): void {
    if(this.balanceRequestInfo.minAmount < 100) {
      this.failedMandatoryConditionIndicator = true;
    } else {
      console.log('calling rest service with: ' + this.balanceRequestInfo.toString());
    }
  }

  failedMandatoryCondition(): boolean {
    return this.failedMandatoryConditionIndicator;
  }

  allValidationsPassed(): boolean {
    return false;
  }
}