import { TestBed } from '@angular/core/testing';
import { ExpensesApiService } from './expenses-api.service';

describe('ExpensesApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ExpensesApiService = TestBed.inject(ExpensesApiService);
    expect(service).toBeTruthy();
  });
});
