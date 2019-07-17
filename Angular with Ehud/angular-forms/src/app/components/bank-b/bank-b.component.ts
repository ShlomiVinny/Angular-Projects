import { Component, OnInit, OnDestroy } from '@angular/core';
import { BalanceRequestInfo } from './balance-request-info';

@Component({
  selector: 'app-bank-b',
  templateUrl: './bank-b.component.html',
  styleUrls: ['./bank-b.component.css']
})
export class BankBComponent implements OnInit, OnDestroy {

  balanceRequestInfo = new BalanceRequestInfo();
  failedMandatoryConditionIndicator = false;
  direction = new Array<string>();

  constructor() { }

  ngOnInit() {
    this.direction.push('incoming');
    this.direction.push('outgoing');
    console.log('bank b init');
  }
  ngOnDestroy(){
    console.log('bank b destroy');
  }

  executeBalanceRequest(): void {
    console.log('calling rest service with: ' + this.balanceRequestInfo.toString());
  }

  get diagnostic() { return JSON.stringify(this.balanceRequestInfo); }
}
