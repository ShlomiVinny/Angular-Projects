import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomContextMenuComponent } from './custom-context-menu.component';

describe('CustomContextMenuComponent', () => {
  let component: CustomContextMenuComponent;
  let fixture: ComponentFixture<CustomContextMenuComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CustomContextMenuComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomContextMenuComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
