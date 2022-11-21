import { Routes, RouterModule } from '@angular/router';
import { ReportsWrapperComponent } from './wrapper/reports-wrapper.component';
import {
  REPORTS_BILLING,
  REPORTS_INVENTORIES,
  REPORTS_CLOTHES,
  REPORTS_USERS,
} from '@utils/constants/routes.constant';

/**
 * Reports routes
 */
const routes: Routes = [
  {
    path: '',
    component: ReportsWrapperComponent,
    children: [
      {
        path: '',
        pathMatch: 'full',
      },
      {
        path: REPORTS_BILLING,
        component: ReportsWrapperComponent,
      },
      {
        path: REPORTS_INVENTORIES,
        component: ReportsWrapperComponent,
      },
      {
        path: REPORTS_USERS,
        component: ReportsWrapperComponent,
      },
      {
        path: REPORTS_CLOTHES,
        component: ReportsWrapperComponent,
      },
    ],
  },
];

/**
 * Reports routes export
 */
export const REPORTS_ROUTES = RouterModule.forChild(routes);
