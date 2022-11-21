import { IEstablishment } from '@domain/model/interfaces/establishment.interface';

/**
 * Get all establishments response type
 */
export interface IAllEstablishmentsResponse {
  data: IEstablishment[];
  code: number;
  codename: string;
}
