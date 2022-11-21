import { ApiController } from '@utils/enums/auxiliary';
import { environment } from '../../../environments/environment';

/**
 * Type helper for url method
 */
type ApiMethod = string;

/**
 * Build an API url
 * @param concatParams Concatenation of Controllers, Methods, and any possible param for the url
 */
export const getApiUrl = (...concatParams: ApiController[] | ApiMethod[]): string => {
  return `${environment.apiUrl}/${concatParams.join('/')}`;
};
