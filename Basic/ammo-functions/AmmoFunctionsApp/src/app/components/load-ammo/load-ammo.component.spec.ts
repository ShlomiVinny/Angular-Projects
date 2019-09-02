import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoadAmmoComponent } from './load-ammo.component';

describe('LoadAmmoComponent', () => {
  let component: LoadAmmoComponent;
  let fixture: ComponentFixture<LoadAmmoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoadAmmoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoadAmmoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
