import { TestBed } from '@angular/core/testing';

import { DalService } from './dal-service.service';

describe('UsersServiceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DalService = TestBed.get(DalService);
    expect(service).toBeTruthy();
  });
});
