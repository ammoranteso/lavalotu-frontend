import { HttpResponse } from '@angular/common/http';
import { IClient } from '@domain/model/interfaces';
import { Observable } from 'rxjs';
import { IFacadeApiMap, IResponseApiWrapper } from '../auxiliary';

/**
 * TODO: Document IClientsController purpose
 */
export interface IClientsController {
  // tslint:disable-next-line: completed-docs
  getAllClients():
    | Observable<IResponseApiWrapper<IClient[]>>
    | Observable<IFacadeApiMap<IClient[]>>;

  // tslint:disable-next-line: completed-docs
  createClient(
    client: IClient
  ):
    | Observable<HttpResponse<null>>
    | Observable<IFacadeApiMap<boolean, IClient>>;
}
