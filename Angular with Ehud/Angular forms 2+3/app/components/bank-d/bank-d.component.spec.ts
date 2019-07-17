import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BankDComponent } from './bank-d.component';

describe('BankDComponent', () => {
  let component: BankDComponent;
  let fixture: ComponentFixture<BankDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BankDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BankDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
