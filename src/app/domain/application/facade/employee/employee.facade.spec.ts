import { TestBed } from '@angular/core/testing';
import { EmployeeFacade } from './employee.facade';

describe('EmployeeFacade', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EmployeeFacade = TestBed.inject(EmployeeFacade);
    expect(service).toBeTruthy();
  });
});
