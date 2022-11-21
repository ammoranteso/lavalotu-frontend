import { Component, OnInit } from '@angular/core';
import { UserRoles } from '@utils/enums/auxiliary/roles.enum';
import {
  BILLING_BASE,
  CONFIGURATION_BASE,
  DASHBOARD_BASE,
} from '@utils/constants';
import { SessionService } from '@services/session/session.service';
import { LocalstorageService } from '@services/localstorage/localstorage.service';
import { Router } from '@angular/router';

/**
 * Dashboard module wrapper
 */
@Component({
  templateUrl: './dashboard-wrapper.component.html',
  styleUrls: ['./dashboard-wrapper.component.scss'],
})
export class DashboardWrapperComponent implements OnInit {
  /**
   * Actual role
   */
  role!: string;

  constructor(
    private readonly localStorageService: LocalstorageService,
    private readonly sessionService: SessionService,
    private readonly router: Router
  ) {
    this.role = this.sessionService.getSessionType(
      this.localStorageService.token
    );
  }

  // tslint:disable-next-line: completed-docs
  ngOnInit() {
    // Redirects given the role of the user
    if (this.role === UserRoles.STORER) {
      this.router.navigateByUrl(`/${DASHBOARD_BASE}/${BILLING_BASE}`);
    } else if (this.role === UserRoles.ADMIN) {
      this.router.navigateByUrl(`/${DASHBOARD_BASE}/${CONFIGURATION_BASE}`);
    }
  }
}
