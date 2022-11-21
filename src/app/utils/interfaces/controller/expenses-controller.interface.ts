import { IExpense } from '@domain/model/interfaces';
import { Observable } from 'rxjs';
import { IFacadeApiMap, IResponseApiWrapper } from '../auxiliary';

/**
 * TODO: Document IExpensesController purpose
 */
export interface IExpensesController {
  // tslint:disable-next-line: completed-docs
  getAllExpenses():
    | Observable<IResponseApiWrapper<IExpense[]>>
    | Observable<IFacadeApiMap<IExpense[]>>;

  // tslint:disable-next-line: completed-docs
  createExpense(
    expense: IExpense
  ):
    | Observable<IResponseApiWrapper<IExpense>>
    | Observable<IFacadeApiMap<IExpense>>;
}
