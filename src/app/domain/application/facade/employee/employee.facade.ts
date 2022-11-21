import { Injectable } from '@angular/core';
import { IEmployeeController } from '@utils/interfaces/controller';
import { EmployeeApiService } from '@domain/infrastructure/api';
import { IEmployeeRequestBody } from '@utils/interfaces/request-body';
import { Observable, of } from 'rxjs';
import { IRolesResponse } from '@utils/interfaces/response';
import { catchError, map } from 'rxjs/operators';
import { IFacadeApiMap, IPageable } from '@utils/interfaces/auxiliary';
import { IEmployeeListOptionsRequest } from '@utils/interfaces/request';
import { buildEmployee, readPagination } from '@utils/functions';
import { IEmployee } from '@domain/model/interfaces';
import { NgslOption } from '@ngsl/components';

/**
 * Handles all Employee stuff logic
 */
@Injectable({
  providedIn: 'root'
})
export class EmployeeFacade implements IEmployeeController {

  constructor(
    private readonly api: EmployeeApiService,
  ) { }

  /**
   * Allows to create an employee laundry
   * @param body the request data to create employee
   * @returns a boolean validation
   */
  createEmployee(body: IEmployeeRequestBody): Observable<IFacadeApiMap<boolean>> {

    return this.api.createEmployee(body).pipe(
      map(data => ({
        payload: data ? true : false
      })),
      catchError(err => of({ err }))
    );
  }
  /**
   * Allows to get roles employee
   * @returns a boolean validation
   */
  getRolesEmployee(): Observable<IFacadeApiMap<IRolesResponse[]>> {
    return this.api.getRolesEmployee().pipe(
      map(res => ({ payload: res.data })),
      catchError(err => of({ err }))
    );
  }
  /**
   * Get the roles necessary to select options
   * @returns string with the item
   */
  getRolesEmployeeOptions(): Observable<NgslOption[]> {
    return this.getRolesEmployee().pipe(
      map(res => res.payload ? res.payload.map(item => item.name) : [])
    );
  }

  /**
   * Allows to get employee's information
   * @returns a boolean validation
   */
  getAllEmployees(options: Partial<IEmployeeListOptionsRequest>): Observable<
    IFacadeApiMap<IPageable<IEmployee>>> {
    options.Page = options.Page || 1;
    options.PageSize = options.PageSize || 10;

    return this.api.getAllEmployees(options).pipe(
      map(res => ({
        payload: readPagination(res.body?.data?.map(element => buildEmployee({
          ...element,
        })), res.headers)
      })),
      catchError(err => of({ err }))
    );
  }
}
