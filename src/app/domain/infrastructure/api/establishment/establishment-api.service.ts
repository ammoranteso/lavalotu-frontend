import { Injectable } from '@angular/core';
import { IEstablishmentController } from '@utils/interfaces/controller';
import { HttpClient } from '@angular/common/http';
import { IEstablishment } from '@domain/model/interfaces/establishment.interface';
import { Observable } from 'rxjs';
import { getApiUrl } from '@utils/functions/api-url.function';
import { ApiController } from '@utils/enums/auxiliary';
import { EstablishmentApiController } from '@utils/enums/api-controller';
import { IResponseApiWrapper } from '@utils/interfaces/auxiliary';
import { IPriceUpload } from '@domain/model/interfaces/priceupload.interface';

/**
 * API: Obtain the establishment data
 */
@Injectable({
  providedIn: 'root',
})
export class EstablishmentApiService implements IEstablishmentController {
  constructor(private readonly http: HttpClient) {}

  /**
   * Obtains all the registered establishments
   * @returns Http response
   */
  getAllEstablishments(): Observable<IResponseApiWrapper<IEstablishment[]>> {
    return this.http.get<IResponseApiWrapper<IEstablishment[]>>(
      getApiUrl(ApiController.ESTABLISHMENT, EstablishmentApiController.ALL)
    );
  }
  /**
   * Creates an establishment
   * @param establishment Establishment to create
   * TODO: Implement response wrapper
   */
  createEstablishment(establishment: IEstablishment): Observable<any> {
    return this.http.post<any>(
      getApiUrl(ApiController.ESTABLISHMENT, EstablishmentApiController.CREATE),
      establishment
    );
  }

  /**
   * Posts all prices to service
   */
  postAllPrices(
    allPrices: IPriceUpload,
    establishmentId: string
  ): Observable<IResponseApiWrapper<IPriceUpload>> {
    return this.http.post<IResponseApiWrapper<IPriceUpload>>(
      getApiUrl(
        ApiController.ESTABLISHMENT,
        encodeURIComponent(establishmentId),
        EstablishmentApiController.PRICES
      ),
      allPrices
    );
  }
}
