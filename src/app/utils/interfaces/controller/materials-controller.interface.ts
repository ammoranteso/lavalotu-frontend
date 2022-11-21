import { IMaterial } from '@domain/model/interfaces/material.interface';
import { Observable } from 'rxjs';
import { IResponseApiWrapper } from '../auxiliary';

/**
 * Describes Material API/Facade shape
 */
export interface IMaterialsController {
  // tslint:disable-next-line: completed-docs
  getAllMaterials(): Observable<IResponseApiWrapper<IMaterial[]>> | void;
}
