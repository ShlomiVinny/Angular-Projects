import { Component, OnInit, NgZone } from '@angular/core';
import { FormControl,  Validators, ValidatorFn, ValidationErrors, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-bank-d',
  templateUrl: './bank-d.component.html',
  styleUrls: ['./bank-d.component.css']
})
export class BankDComponent implements OnInit {

  thecolor = 'red';
  balanceInfoForm = new FormGroup({
    minAmount: new FormControl(''),
    maxAmount: new FormControl('', {updateOn: 'blur'}),
    freeText: new FormControl('')
  });

  constructor(public zone: NgZone) {
    console.log('from constructor of component');
  }

  ngOnInit() {

    console.log('from ngOnInit of component');

    this.balanceInfoForm.controls.minAmount.setValidators([
      Validators.required,
      Validators.min(100)]);

    this.balanceInfoForm.controls.maxAmount.setValidators([
      Validators.required,
      Validators.max(100000)]);

    this.balanceInfoForm.setValidators(this.myCustomValidator());
  }

  myCustomValidator(): ValidatorFn | ValidatorFn[] {
    return (group: FormGroup): ValidationErrors => {
      const minAmount = this.balanceInfoForm.controls.minAmount.value;
      const maxAmount = this.balanceInfoForm.controls.maxAmount.value;
      if (minAmount > maxAmount) {
        return {'mismatch': true};
      }
      return;
    };
  }

  executeBalanceRequest(): void {
    console.log('calling rest service with: ' + this.balanceInfoForm.value);
    this.balanceInfoForm.reset();
    this.thecolor = 'black';
  }

  getSecurityWarningColor(): string {
    return this.thecolor;
  }

  get diagnostic() { return JSON.stringify(this.balanceInfoForm.value); }
}
