import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankBComponent } from './bank-b.component';

describe('BankBComponent', () => {
  let component: BankBComponent;
  let fixture: ComponentFixture<BankBComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankBComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankBComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
