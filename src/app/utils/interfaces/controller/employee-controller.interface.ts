import { HttpResponse } from '@angular/common/http';
import { IEmployee } from '@domain/model/interfaces';
import { Observable } from 'rxjs';
import { IFacadeApiMap, IPageable, IResponseApiWrapper } from '../auxiliary';
import { IEmployeeListOptionsRequest } from '../request';
import { IEmployeeRequestBody } from '../request-body';
import { IAllEmployeesResponse } from '../response';
import { IRolesResponse } from '../response/roles-response.interface';

/**
 * Employee Controller to save logic in the methods
 */
export interface IEmployeeController {

  // tslint:disable-next-line: completed-docs
  createEmployee(body: IEmployeeRequestBody): Observable<HttpResponse<null> |
    IFacadeApiMap<boolean>>;

  // tslint:disable-next-line: completed-docs
  getRolesEmployee(): Observable<IResponseApiWrapper<IRolesResponse[]> |
    IFacadeApiMap<IRolesResponse[]>>;

  // tslint:disable-next-line: completed-docs
  getAllEmployees(options: Partial<IEmployeeListOptionsRequest>): Observable<HttpResponse<IResponseApiWrapper<IAllEmployeesResponse[]>> |
    IFacadeApiMap<IPageable<IEmployee>>>;
}
