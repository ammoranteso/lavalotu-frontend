import { Injectable } from '@angular/core';
import { IClientsController } from '@utils/interfaces/controller';
import { ClientsApiService } from '@domain/infrastructure/api';
import { map, catchError } from 'rxjs/operators';
import { IClient } from '@domain/model/interfaces';
import { IFacadeApiMap } from '@utils/interfaces/auxiliary';
import { Observable, of } from 'rxjs';

/**
 * TODO: Document ClientsFacade purpose
 */
@Injectable({
  providedIn: 'root',
})
export class ClientsFacade implements IClientsController {
  constructor(private readonly api: ClientsApiService) {}

  /**
   * Handles the all clients info from the api
   */
  getAllClients(): Observable<IFacadeApiMap<IClient[]>> {
    return this.api.getAllClients().pipe(
      map((res) => ({ payload: res.data })),
      catchError((err) => of({ err }))
    );
  }

  /**
   * Handles the client creation
   * @param client Client to create
   */
  createClient(client: IClient): Observable<IFacadeApiMap<boolean, IClient>> {
    return this.api.createClient(client).pipe(
      map((data) => ({
        payload: data ? true : false,
      })),
      catchError((err) => of({ err }))
    );
  }
}
