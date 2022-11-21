import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
} from '@angular/router';
import { Observable } from 'rxjs';
import { LocalstorageService } from '@services/localstorage/localstorage.service';
import { SessionService } from '@services/session/session.service';
import { UserRoles } from '@utils/enums/auxiliary/roles.enum';

/**
 * Auth guard, for dashboard protected routes.
 */
@Injectable({
  providedIn: 'root',
})
export class StorerGuard implements CanActivate {
  /**
   * Actual role
   */
  role!: string;

  constructor(
    private readonly localStorageService: LocalstorageService,
    private readonly sessionService: SessionService
  ) {
    this.role = this.sessionService.getSessionType(
      this.localStorageService.token
    );
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
    if (this.role === UserRoles.STORER || this.role === UserRoles.ADMIN) {
      return true;
    } else {
      return false;
    }
  }
}
