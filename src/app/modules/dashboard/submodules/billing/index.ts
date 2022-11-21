import { CloseBillingComponent } from './pages/close-billing/close-billing.component';
import { SearchBillComponent } from './pages/search-bill/search-bill.component';
import { CreateBillComponent } from './pages/create-bill/create-bill.component';
import { BillingWrapperComponent } from './wrapper/billing-wrapper.component';

/**
 * Billing components
 */
export const BILLING_COMPONENTS: any[] = [
  BillingWrapperComponent,
  CreateBillComponent,
  SearchBillComponent,
  CloseBillingComponent,
];

/**
 * Components
 */

export * from './wrapper/billing-wrapper.component';
export * from './pages/create-bill/create-bill.component';
export * from './pages/search-bill/search-bill.component';
export * from './pages/close-billing/close-billing.component';
