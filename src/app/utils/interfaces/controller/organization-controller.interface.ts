import { IOrganization } from '@domain/model/interfaces/organization.interface';
import { Observable } from 'rxjs';
import { IFacadeApiMap, IResponseApiWrapper } from '../auxiliary';

/**
 * Describes Organization API/Facade shape
 */
export interface IOrganizationController {
  // tslint:disable-next-line: completed-docs
  organizationById(
    id: string
  ):
    | Observable<IResponseApiWrapper<IOrganization>>
    | Observable<IFacadeApiMap<IOrganization>>;
}
