import { Observable } from 'rxjs';
import { ILoginUser } from '@domain/model/interfaces/login-user.interface';

/**
 * Auth controller interface
 */
export interface IAuthController {
  /**
   * Login method
   */
  login(user: Partial<ILoginUser>): Observable<any> | void;

  /**
   * Refresh token method
   */
  refreshToken(token: string): Observable<any> | Observable<string>;
}
