import { Routes, RouterModule } from '@angular/router';
import { LandingWrapperComponent } from './wrapper/landing-wrapper.component';
import { LoginComponent } from './pages/login/login.component';

/**
 * Landing routes
 */
const routes: Routes = [
  {
    path: '',
    component: LandingWrapperComponent,
    children: [
      {
        path: '',
        component: LoginComponent,
      },
    ],
  },
];

/**
 * Landing routes export
 */
export const LANDING_ROUTES = RouterModule.forChild(routes);
