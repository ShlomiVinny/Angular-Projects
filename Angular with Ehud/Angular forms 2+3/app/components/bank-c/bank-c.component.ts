import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-bank-c',
  templateUrl: './bank-c.component.html',
  styleUrls: ['./bank-c.component.css']
})
export class BankCComponent implements OnInit {

  minAmount = new FormControl('');
  maxAmount = new FormControl('');
  freeText = new FormControl('');

  constructor() { }

  ngOnInit() {
    this.minAmount.setValidators([
      Validators.required,
      Validators.min(100)]);
  }

  executeBalanceRequest(): void {
    console.log('calling rest service with: ' +
    'minAmount:' + this.minAmount.value +
    'maxAmount:' + this.maxAmount.value +
    'freeText:' + this.freeText.value);
  }

  get diagnostic() { return JSON.stringify(this.minAmount); }

}
