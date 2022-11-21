import { Injectable } from '@angular/core';
import { LaundryServicesApiService } from '@domain/infrastructure/api/laundry-services/laundry-services-api.service';
import { ILaundryService } from '@domain/model/interfaces/service.interface';
import { Observable, of } from 'rxjs';
import { map, catchError, shareReplay } from 'rxjs/operators';
import { ILaundryServicesApiController } from '@utils/interfaces/controller';
import { IFacadeApiMap } from '@utils/interfaces/auxiliary';
/**
 * Facade between laundry laundry-laundry-services service and config components
 */
@Injectable({
  providedIn: 'root',
})
export class LaundryServicesFacade implements ILaundryServicesApiController {
  constructor(private readonly api: LaundryServicesApiService) {}

  allServices$!: Observable<IFacadeApiMap<ILaundryService[]>>;

  /**
   * Return all laundry-laundry-services observable
   */
  getAllServices(): void {
    this.allServices$ = this.api.getAllServices().pipe(
      shareReplay(1),
      map((res) => ({ payload: res.data })),
      catchError((err) => of({ err }))
    );
  }

  /**
   * Return one service searched by id
   */
  getServiceById(id: string): Observable<ILaundryService> {
    return this.api.getServiceById(id).pipe(
      map((res) => {
        return res.data;
      })
    );
  }
}
