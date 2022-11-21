import { Injectable } from '@angular/core';
import { IExpensesController } from '@utils/interfaces/controller';
import { ExpensesApiService } from '@domain/infrastructure/api';
import { IExpense } from '@domain/model/interfaces';
import { IFacadeApiMap } from '@utils/interfaces/auxiliary';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

/**
 * TODO: Document ExpensesFacade purpose
 */
@Injectable({
  providedIn: 'root',
})
export class ExpensesFacade implements IExpensesController {
  constructor(private readonly api: ExpensesApiService) {}

  /**
   * Handles the data received from api, lists all expenses for component
   */
  getAllExpenses(): Observable<IFacadeApiMap<IExpense[]>> {
    return this.api.getAllExpenses().pipe(
      map((res) => ({ payload: res.data })),
      catchError((err) => of({ err }))
    );
  }

  /**
   * Handles the response to create petition from api
   * @param expense Expense to create
   */
  createExpense(expense: IExpense): Observable<IFacadeApiMap<IExpense>> {
    return this.api.createExpense(expense).pipe(
      map((res) => ({ payload: res.data })),
      catchError((err) => of({ err }))
    );
  }
}
