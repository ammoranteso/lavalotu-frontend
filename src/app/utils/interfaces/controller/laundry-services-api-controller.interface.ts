import { Observable } from 'rxjs';
import { ILaundryService } from '@domain/model/interfaces/service.interface';
import { IServiceByIdResponse } from '../response/service-by-id-response.interface';
import { IResponseApiWrapper } from '../auxiliary';

/**
 * All laundry-laundry-services controller description
 */
export interface ILaundryServicesApiController {
  // tslint:disable-next-line: completed-docs
  getAllServices(): Observable<IResponseApiWrapper<ILaundryService[]>> | void;

  // tslint:disable-next-line: completed-docs
  getServiceById(
    id: string
  ): Observable<IServiceByIdResponse> | Observable<ILaundryService>;
}
