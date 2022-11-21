import { ILaundryService } from '@domain/model/interfaces/service.interface';

/**
 * Get one service response type
 */
export interface IServiceByIdResponse {
  data: ILaundryService;
  code: number;
  codename: string;
}
