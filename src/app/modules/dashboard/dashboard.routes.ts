import { Routes, RouterModule } from '@angular/router';
import { DashboardWrapperComponent } from './wrapper/dashboard-wrapper.component';
import {
  BILLING_BASE,
  CLIENTS_BASE,
  CONFIGURATION_BASE,
  EMPLOYEE_BASE,
  REPORTS_BASE,
} from '@utils/constants/routes.constant';
import { StorerGuard } from '@guards/storer/storer.guard';
import { SuperAdminGuard } from '@guards/super-admin/super-admin.guard';

/**
 * Dashboard routes
 */
const routes: Routes = [
  {
    path: '',
    component: DashboardWrapperComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
      },
      {
        path: BILLING_BASE,
        canActivate: [StorerGuard],
        loadChildren: () =>
          import('./submodules/billing/billing.module').then(
            (m) => m.BillingModule
          ),
      },
      {
        path: CLIENTS_BASE,
        canActivate: [StorerGuard],
        loadChildren: () =>
          import('./submodules/clients/clients.module').then(
            (m) => m.ClientsModule
          ),
      },
      {
        path: CONFIGURATION_BASE,
        canActivate: [StorerGuard, SuperAdminGuard],
        loadChildren: () =>
          import('./submodules/configuration/configuration.module').then(
            (m) => m.ConfigurationModule
          ),
      },
      {
        path: REPORTS_BASE,
        canActivate: [StorerGuard],
        loadChildren: () =>
          import('./submodules/reports/reports.module').then(
            (m) => m.ReportsModule
          ),
      },
      {
        path: EMPLOYEE_BASE,
        canActivate: [StorerGuard],
        loadChildren: () =>
          import('./submodules/employees/employees.module').then(
            (m) => m.EmployeesModule
          ),
      },
    ],
  },
];

/**
 * Dashboard routes export
 */
export const DASHBOARD_ROUTES = RouterModule.forChild(routes);
