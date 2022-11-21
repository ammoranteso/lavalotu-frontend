import { Injectable } from '@angular/core';
import { IEmployeeController } from '@utils/interfaces/controller';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { IResponseApiWrapper } from '@utils/interfaces/auxiliary';
import { IEmployeeRequestBody } from '@utils/interfaces/request-body';
import { Observable } from 'rxjs';
import { getApiUrl } from '@utils/functions/api-url.function';
import { ApiController } from '@utils/enums/auxiliary';
import { EmployeesApiController } from '@utils/enums/api-controller';
import { IAllEmployeesResponse, IRolesResponse } from '@utils/interfaces/response';
import { IEmployeeListOptionsRequest } from '@utils/interfaces/request';

/**
 * Handles all API request for employee stuff
 */
@Injectable({
  providedIn: 'root'
})
export class EmployeeApiService implements IEmployeeController {

  constructor(
    private readonly http: HttpClient
  ) { }

  /**
   * Create Employee setting a body request
   * @param body The request body
   * @returns Observable with http response
   */
  createEmployee(body: IEmployeeRequestBody): Observable<HttpResponse<null>> {
    return this.http.post<null>(getApiUrl(ApiController.EMPLOYEES, EmployeesApiController.CREATE),
      body, {
      observe: 'response'
    });
  }

  /**
   * Gets the employee roles
   * @return Http response
   */
  getRolesEmployee(): Observable<IResponseApiWrapper<IRolesResponse[]>> {
    return this.http.get<IResponseApiWrapper<IRolesResponse[]>>(
      getApiUrl(EmployeesApiController.ALL)
    );
  }

  /**
   * Gets all employees information
   * @return Http response
   */
  getAllEmployees(options: Partial<IEmployeeListOptionsRequest>): Observable<
    HttpResponse<IResponseApiWrapper<IAllEmployeesResponse[]>>> {
    const params: { [key: string]: string } = {};
    Object.keys(options).forEach(key => {
      const value = (options as any)[key];
      if (value !== undefined && value !== null) {
        // tslint:disable-next-line: prefer-template
        params[key] = value + '';
      }
    });
    return this.http.get<IResponseApiWrapper<IAllEmployeesResponse[]>>(getApiUrl(ApiController.EMPLOYEES,
      EmployeesApiController.ALL), {
      params,
      observe: 'response'
    });
  }

}
