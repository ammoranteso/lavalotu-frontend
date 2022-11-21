import { ConfigMenuComponent } from './shared/config-menu/config-menu.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { DashboardWrapperComponent } from './wrapper/dashboard-wrapper.component';

/**
 * Dashboard components
 */
export const DASHBOARD_COMPONENTS: any[] = [
  DashboardWrapperComponent,
  NavbarComponent,
  ConfigMenuComponent,
];

/**
 * Components
 */

export * from './wrapper/dashboard-wrapper.component';
export * from './shared/navbar/navbar.component';
export * from './shared/config-menu/config-menu.component';
