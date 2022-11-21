import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IServiceByIdResponse } from '@utils/interfaces/response/service-by-id-response.interface';
import { getApiUrl } from '@utils/functions/api-url.function';
import { ApiController } from '@utils/enums/auxiliary';
import { LaundryServicesApiController } from '@utils/enums/api-controller';
import { ILaundryServicesApiController } from '@utils/interfaces/controller';
import { IResponseApiWrapper } from '@utils/interfaces/auxiliary';
import { ILaundryService } from '@domain/model/interfaces/service.interface';

/**
 * Service for laundry laundry-laundry-services
 */
@Injectable({
  providedIn: 'root',
})
export class LaundryServicesApiService
  implements ILaundryServicesApiController {
  constructor(private readonly http: HttpClient) {}

  /**
   * Get all laundry laundry-laundry-services
   */
  getAllServices(): Observable<IResponseApiWrapper<ILaundryService[]>> {
    return this.http.get<IResponseApiWrapper<ILaundryService[]>>(
      getApiUrl(ApiController.SERVICES, LaundryServicesApiController.ALL)
    );
  }

  /**
   * Get one laundry service by id
   * @param id String with the id of the service
   */
  getServiceById(id: string): Observable<IServiceByIdResponse> {
    return this.http.get<IServiceByIdResponse>(
      getApiUrl(ApiController.SERVICES, encodeURIComponent(id))
    );
  }
}
