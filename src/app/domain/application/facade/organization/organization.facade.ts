import { Injectable } from '@angular/core';
import { IOrganizationController } from '@utils/interfaces/controller';
import { OrganizationApiService } from '@domain/infrastructure/api';
import { IOrganization } from '@domain/model/interfaces/organization.interface';
import { IFacadeApiMap } from '@utils/interfaces/auxiliary';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

/**
 * TODO: Document OrganizationFacade purpose
 */
@Injectable({
  providedIn: 'root',
})
export class OrganizationFacade implements IOrganizationController {
  constructor(private readonly api: OrganizationApiService) {}

  /**
   * Handles the organization data by id from the service
   */
  organizationById(id: string): Observable<IFacadeApiMap<IOrganization>> {
    return this.api.organizationById(id).pipe(
      map((res) => ({ payload: res.data })),
      catchError((err) => of({ err }))
    );
  }
}
