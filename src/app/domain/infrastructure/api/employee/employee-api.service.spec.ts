import { TestBed } from '@angular/core/testing';
import { EmployeeApiService } from './employee-api.service';

describe('EmployeeApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeApiService = TestBed.inject(EmployeeApiService);
    expect(service).toBeTruthy();
  });
});
