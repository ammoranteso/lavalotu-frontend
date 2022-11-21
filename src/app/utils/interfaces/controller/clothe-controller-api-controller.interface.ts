import { Observable } from 'rxjs';
import { IClothe } from '@domain/model/interfaces/clothe.interface';
import { IResponseApiWrapper } from '../auxiliary';
import { ClotheSection } from '@domain/model/enums/clothe-section.enum';

/**
 * Clothe controller interface
 */
export interface IClothesApiController {
  // tslint:disable-next-line: completed-docs
  getAllClothes(
    type?: ClotheSection
  ): Observable<IResponseApiWrapper<IClothe[]>> | void;
}
