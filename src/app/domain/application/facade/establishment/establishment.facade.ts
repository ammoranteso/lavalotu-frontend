import { Injectable } from '@angular/core';
import { IEstablishmentController } from '@utils/interfaces/controller';
import { EstablishmentApiService } from '@domain/infrastructure/api';
import { IEstablishment } from '@domain/model/interfaces/establishment.interface';
import { catchError, map } from 'rxjs/operators';
import { Observable, of } from 'rxjs';
import { NgslOption } from '@ngsl/components';
import { IFacadeApiMap } from '@utils/interfaces/auxiliary';
import { IPrices } from '@domain/model/interfaces/prices.interface';
import { IPriceUpload } from '@domain/model/interfaces/priceupload.interface';

/**
 * Establishment stuff logic
 */
@Injectable({
  providedIn: 'root',
})
export class EstablishmentFacade implements IEstablishmentController {
  constructor(private readonly api: EstablishmentApiService) { }

  postReponse$!: Observable<IFacadeApiMap<IPrices[]>>;

  /**
   * Obtains all the registered establishments from the api
   */
  getAllEstablishments(): Observable<IFacadeApiMap<IEstablishment[]>> {
    return this.api.getAllEstablishments().pipe(
      map((res) => ({ payload: res.data })),
      catchError((err) => of({ err }))
    );
  }

  /**
   * Creates an establishment calling the API
   * @param establishment Establishment to create
   * TODO: Implement response wrapper
   */
  createEstablishment(
    establishment: IEstablishment
  ): Observable<IEstablishment> {
    return this.api.createEstablishment(establishment).pipe(
      map((res: any) => {
        return res.data;
      })
    );
  }

  /**
   * Choose Establishment id in selector
   * @returns object type ngslOption
   */
  getEstablishmentOptions(): Observable<NgslOption[]> {
    return this.getAllEstablishments().pipe(
      map((res) =>
        res.payload ? res.payload.map(
          (data: { establishmentName: string; id: string }) => {
            return {
              label: data.establishmentName,
              value: data.id,
            };
          }
        ) : []
      )
    );
  }
  /**
   * Treats the data from api
   */
  postAllPrices(
    allPrices: IPriceUpload,
    establishmentId: string
  ): Observable<IFacadeApiMap<IPriceUpload>> {
    return this.api.postAllPrices(allPrices, establishmentId).pipe(
      map((res) => ({ payload: res.data })),
      catchError((err) => of({ err }))
    );
  }
}
