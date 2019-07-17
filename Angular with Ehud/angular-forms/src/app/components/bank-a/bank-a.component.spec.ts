import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAComponent } from './bank-a.component';

describe('BankAComponent', () => {
  let component: BankAComponent;
  let fixture: ComponentFixture<BankAComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankAComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankAComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
