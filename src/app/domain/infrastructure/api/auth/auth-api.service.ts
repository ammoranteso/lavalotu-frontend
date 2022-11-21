import { Injectable } from '@angular/core';
import { IAuthController } from '@utils/interfaces/controller';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { ILoginUser } from '@domain/model/interfaces/login-user.interface';
import { Observable } from 'rxjs';
import { getApiUrl } from '@utils/functions/api-url.function';
import { ApiController } from '@utils/enums/auxiliary';

/**
 * Service for authentication
 */
@Injectable({
  providedIn: 'root',
})
export class AuthApiService implements IAuthController {
  constructor(
    private readonly http: HttpClient
  ) { }

  /**
   * @param user => Login user data (email: string, password: string)
   */
  // tslint:disable-next-line: completed-docs
  login(user: Partial<ILoginUser>): Observable<HttpResponse<void>> {
    return this.http.post<void>(getApiUrl(ApiController.SIGN_IN), user, {
      observe: 'response',
    });
  }

  /**
   * Refresh token method
   * !! Still in development, not implemented yet
   */
  refreshToken(token: string): Observable<HttpResponse<any>> {
    return this.http.post<any>(getApiUrl('refreshToken'), token);
  }
}
