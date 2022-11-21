import { IClothe } from '@domain/model/interfaces/clothe.interface';

/**
 * Get all laundry-laundry-services response type
 */
export interface IAllClothesResponse {
  data: IClothe[];
  code: number;
  codename: string;
}
