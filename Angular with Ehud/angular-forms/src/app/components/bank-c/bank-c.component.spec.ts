import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankCComponent } from './bank-c.component';

describe('BankCComponent', () => {
  let component: BankCComponent;
  let fixture: ComponentFixture<BankCComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankCComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankCComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
