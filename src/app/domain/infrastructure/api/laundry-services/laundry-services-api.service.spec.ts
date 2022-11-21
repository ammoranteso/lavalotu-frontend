import { TestBed } from '@angular/core/testing';

import { LaundryServicesApiService } from './laundry-services-api.service';

describe('ServicesApiService', () => {
  let service: LaundryServicesApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LaundryServicesApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
