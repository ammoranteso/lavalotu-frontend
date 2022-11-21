import { Injectable } from '@angular/core';
import { IAuthController } from '@utils/interfaces/controller';
import { AuthApiService } from '@domain/infrastructure/api';
import { ILoginUser } from '@domain/model/interfaces/login-user.interface';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { LocalstorageService } from '@services/localstorage/localstorage.service';
import { Router } from '@angular/router';

/**
 * Facade between auth service and login components
 */
@Injectable({
  providedIn: 'root',
})
export class AuthFacade implements IAuthController {
  cookieService: any;
  authDataService: any;

  constructor(
    private readonly api: AuthApiService,
    private readonly localStorageService: LocalstorageService,
    private readonly router: Router
  ) { }

  /**
   * Calls the API login function and adds any needed logic
   * @param user => Login user data (email: string, password: string)
   */
  login(user: Partial<ILoginUser>): Observable<boolean> {
    return this.api.login(user).pipe(
      map((response) => {
        const token: string | null = response.headers.get('x-token');
        const refreshToken: string | null = response.headers.get(
          'x-refresh-token'
        );
        if (token && refreshToken) {
          this.localStorageService.setToken(token);
          this.localStorageService.setRefreshToken(refreshToken);
          return true;
        } else {
          return false;
        }
      })
    );
  }

  /**
   * Calls the api refresh token function
   * !! Still in development, not implemented yet
   */
  refreshToken(token: string): Observable<string> {
    return this.api.refreshToken(token).pipe(
      map((response) => {
        return 'token';
      })
    );
  }

  /**
   * Remove all localStorage and cookie data
   * and redirect user to root route.
   */
  logout(): void {
    localStorage.clear();
    this.router.navigateByUrl('/');
  }

}
