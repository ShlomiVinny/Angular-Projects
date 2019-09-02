import { TestBed } from '@angular/core/testing';

import { DisplayLoadAmmoService } from './display-load-ammo.service';

describe('DisplayLoadAmmoService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DisplayLoadAmmoService = TestBed.get(DisplayLoadAmmoService);
    expect(service).toBeTruthy();
  });
});
