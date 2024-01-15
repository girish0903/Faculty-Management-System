import { TestBed } from '@angular/core/testing';

import { PhdRegistrationService } from './phd-registration.service';

describe('PhdRegistrationService', () => {
  let service: PhdRegistrationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PhdRegistrationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
