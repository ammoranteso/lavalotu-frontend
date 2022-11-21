import { Injectable } from '@angular/core';
import { IOrganizationController } from '@utils/interfaces/controller';
import { HttpClient } from '@angular/common/http';
import { IOrganization } from '@domain/model/interfaces/organization.interface';
import { IResponseApiWrapper } from '@utils/interfaces/auxiliary';
import { Observable } from 'rxjs';
import { getApiUrl } from '@utils/functions';
import { ApiController } from '@utils/enums/auxiliary';

/**
 * TODO: Document OrganizationApiService
 */
@Injectable({
  providedIn: 'root',
})
export class OrganizationApiService implements IOrganizationController {
  constructor(private readonly http: HttpClient) {}

  /**
   * Retrieves an organization given it's id by param
   * @param id Id of the organization
   */
  organizationById(id: string): Observable<IResponseApiWrapper<IOrganization>> {
    return this.http.get<IResponseApiWrapper<IOrganization>>(
      getApiUrl(ApiController.ORGANIZATION, id)
    );
  }
}
