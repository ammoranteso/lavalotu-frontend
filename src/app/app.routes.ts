import { Routes } from '@angular/router';
import { DASHBOARD_BASE, LANDING_BASE } from '@utils/constants/routes.constant';
import { AuthGuard } from '@guards/auth/auth.guard';

/**
 * Show all root posible routes and their components or modules associated.
 */
export const ROUTES: Routes = [
  {
    path: LANDING_BASE,
    loadChildren: () =>
      import('./modules/landing/landing.module').then((m) => m.LandingModule),
  },
  {
    path: DASHBOARD_BASE,
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/dashboard/dashboard.module').then(
        (m) => m.DashboardModule
      ),
  },
];
