import { Injectable } from '@angular/core';
import { IClientsController } from '@utils/interfaces/controller';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { IClient } from '@domain/model/interfaces';
import { IResponseApiWrapper } from '@utils/interfaces/auxiliary';
import { Observable } from 'rxjs';
import { getApiUrl } from '@utils/functions/api-url.function';
import { ApiController } from '@utils/enums/auxiliary';
import { ClientsApiController } from '@utils/enums/api-controller';

/**
 * TODO: Document ClientsApiService
 */
@Injectable({
  providedIn: 'root',
})
export class ClientsApiService implements IClientsController {
  constructor(private readonly http: HttpClient) {}

  /**
   * Requests all clients from the api
   */
  getAllClients(): Observable<IResponseApiWrapper<IClient[]>> {
    return this.http.get<IResponseApiWrapper<IClient[]>>(
      getApiUrl(ApiController.CLIENTS, ClientsApiController.ALL)
    );
  }

  /**
   * Post a new client to the service
   * @param client Client to create
   */
  createClient(body: IClient): Observable<HttpResponse<null>> {
    return this.http.post<null>(
      getApiUrl(ApiController.CLIENTS, ClientsApiController.CREATE),
      body,
      {
        observe: 'response',
      }
    );
  }
}
