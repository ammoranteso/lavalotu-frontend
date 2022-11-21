import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ExpensesApiService } from '@domain/infrastructure/api';
import { ExpensesFacade } from './expenses.facade';

describe('ExpensesFacade', () => {
  // tslint:disable-next-line: prefer-const
  let expensesFacade: ExpensesFacade;
  // tslint:disable-next-line: prefer-const
  let httpTestingController: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [ExpensesFacade, ExpensesApiService],
    });
    expensesFacade = TestBed.inject(ExpensesFacade);
    httpTestingController = TestBed.inject(HttpTestingController);
  });

  it('should receive all the expenses', () => {
    const service: ExpensesFacade = TestBed.inject(ExpensesFacade);
    expect(service).toBeTruthy();
  });
});
