import { ILaundryService } from '@domain/model/interfaces/service.interface';

/**
 * Get all laundry-laundry-services response type
 */
export interface IAllServicesResponse {
  data: ILaundryService[];
  code: number;
  codename: string;
}
