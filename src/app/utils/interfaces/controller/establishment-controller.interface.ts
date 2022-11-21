import { IEstablishment } from '@domain/model/interfaces/establishment.interface';
import { IPriceUpload } from '@domain/model/interfaces/priceupload.interface';
import { Observable } from 'rxjs';
import { IFacadeApiMap, IResponseApiWrapper } from '../auxiliary';

/**
 * Establishment Controller to protect communication Api-facade
 */
export interface IEstablishmentController {
  // tslint:disable-next-line: completed-docs
  getAllEstablishments(): Observable<
    IResponseApiWrapper<IEstablishment[]> | IFacadeApiMap<IEstablishment[]>
  >;

  // tslint:disable-next-line: completed-docs
  createEstablishment(
    establishment: IEstablishment
  ): Observable<any> | Observable<IEstablishment>;

  // tslint:disable-next-line: completed-docs
  postAllPrices(
    allPrices: IPriceUpload,
    establishmentId: string
  ):
    | Observable<IResponseApiWrapper<IPriceUpload>>
    | Observable<IFacadeApiMap<IPriceUpload>>;
}
