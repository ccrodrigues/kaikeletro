import { TestBed } from '@angular/core/testing';

import { ServiceLoginService } from './service-login.service';

describe('ServiceLoginService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ServiceLoginService = TestBed.get(ServiceLoginService);
    expect(service).toBeTruthy();
  });
});
