import { Routes, RouterModule } from '@angular/router';
import { BillingWrapperComponent } from './wrapper/billing-wrapper.component';
import { CreateBillComponent } from './pages/create-bill/create-bill.component';
import { SearchBillComponent } from './pages/search-bill/search-bill.component';
import { CloseBillingComponent } from './pages/close-billing/close-billing.component';
import {
  BILLING_SEARCH,
  BILLING_CREATE,
  BILLING_CLOSE,
} from '@utils/constants/routes.constant';

/**
 * Billing routes
 */
const routes: Routes = [
  {
    path: '',
    component: BillingWrapperComponent,
    children: [
      {
        path: '',
        redirectTo: BILLING_SEARCH,
      },
      {
        path: BILLING_CREATE,
        component: CreateBillComponent,
      },
      {
        path: BILLING_SEARCH,
        component: SearchBillComponent,
      },
      {
        path: BILLING_CLOSE,
        component: CloseBillingComponent,
      },
    ],
  },
];

/**
 * Billing routes export
 */
export const BILLING_ROUTES = RouterModule.forChild(routes);
