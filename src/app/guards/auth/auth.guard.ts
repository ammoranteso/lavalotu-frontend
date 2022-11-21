import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LocalstorageService } from '@services/localstorage/localstorage.service';

/**
 * Auth guard, for dashboard protected routes.
 */
@Injectable({
  providedIn: 'root',
})
export class AuthGuard implements CanActivate {
  /**
   * JWT
   */
  jwt: string | null;

  constructor(private readonly localStorageService: LocalstorageService) {
    this.jwt = this.localStorageService.token;
  }

  // tslint:disable-next-line: completed-docs
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ):
    | Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree>
    | boolean
    | UrlTree {
    if (this.jwt) {
      return true;
    } else {
      return false;
    }
  }
}
