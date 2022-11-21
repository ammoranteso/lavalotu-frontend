import { IClothe } from '@domain/model/interfaces/clothe.interface';

/**
 * Get one service response type
 */
export interface IClotheByIdResponse {
  data: IClothe;
  code: number;
  codename: string;
}
