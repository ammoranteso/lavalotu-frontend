import { Injectable } from '@angular/core';
import { IExpensesController } from '@utils/interfaces/controller';
import { HttpClient } from '@angular/common/http';
import { IExpense } from '@domain/model/interfaces';
import { IResponseApiWrapper } from '@utils/interfaces/auxiliary';
import { Observable } from 'rxjs';
import { getApiUrl } from '@utils/functions';
import { ApiController } from '@utils/enums/auxiliary';
import { ExpensesApiController } from '@utils/enums/api-controller';

/**
 * TODO: Document ExpensesApiService
 */
@Injectable({
  providedIn: 'root',
})
export class ExpensesApiService implements IExpensesController {
  constructor(private readonly http: HttpClient) {}

  /**
   * Retrieves all the expenses from the back-end
   */
  getAllExpenses(): Observable<IResponseApiWrapper<IExpense[]>> {
    return this.http.get<IResponseApiWrapper<IExpense[]>>(
      getApiUrl(ApiController.EXPENSES, ExpensesApiController.ALL)
    );
  }

  /**
   * Creates an expense in the service
   * @param expense Expense to create
   */
  createExpense(expense: IExpense): Observable<IResponseApiWrapper<IExpense>> {
    return this.http.post<IResponseApiWrapper<IExpense>>(
      getApiUrl(ApiController.EXPENSES, ExpensesApiController.CREATE),
      expense
    );
  }
}
