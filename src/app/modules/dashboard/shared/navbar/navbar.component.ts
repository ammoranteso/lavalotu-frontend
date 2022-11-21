import { Component, OnInit } from '@angular/core';
import { IMenuItem } from '@utils/interfaces/auxiliary/menu-item.interface';
import { SessionService } from '@services/session/session.service';
import { LocalstorageService } from '@services/localstorage/localstorage.service';
import {
  BILLING_BASE,
  CLIENTS_BASE,
  EMPLOYEE_BASE,
  REPORTS_BASE,
} from '@utils/constants/routes.constant';
import { UserRoles } from '@utils/enums/auxiliary/roles.enum';

/**
 * Dashboard navbar component
 */
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  constructor(
    private readonly sessionService: SessionService,
    private readonly localStorageService: LocalstorageService
  ) { }
  /**
   * Since localstorage can be null, it can't be string, help.
   */
  jwt!: string | null;
  /**
   * Variable used to control the side menu
   */
  showMenu: boolean = false;
  /**
   * Menu items
   */
  menuItems: IMenuItem[] = [
    {
      name: 'Reportes',
      url: REPORTS_BASE,
      roles: [UserRoles.STORER, UserRoles.ADMIN],
    },
    {
      name: 'Facturación',
      url: BILLING_BASE,
      roles: [UserRoles.STORER, UserRoles.ADMIN],
    },
    {
      name: 'Mis Clientes',
      url: CLIENTS_BASE,
      roles: [UserRoles.STORER, UserRoles.ADMIN, UserRoles.DOMICILIARY],
    },
    {
      name: 'Planta',
      url: 'reports',
      roles: [UserRoles.ADMIN],
    },
    {
      name: 'Empleados',
      url: EMPLOYEE_BASE,
      roles: [UserRoles.ADMIN],
    },
  ];

  /**
   * Filters the elements that aren't for the role that the JWT specifies
   */
  ngOnInit() {
    this.jwt = this.localStorageService.token;
    this.menuItems = this.menuItems.filter((item: IMenuItem) =>
      this.jwt
        ? item.roles?.includes(this.sessionService.getSessionType(this.jwt))
        : this.menuItems
    );
  }

  /**
   * Function used to vary the showMenu variable
   */
  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

  /**
   * Listen when showMenu changed
   */
  listen(e: boolean): void {
    this.showMenu = e;
  }

}
