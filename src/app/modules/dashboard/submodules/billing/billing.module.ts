import { NgModule } from '@angular/core';
import { BILLING_ROUTES } from './billing.routes';
import { BILLING_COMPONENTS } from '.';
import { SharedModule } from '@custom-modules/shared.module';
import { ClientsSharedModule } from '../clients/shared/clients-shared.module';
import { BillingUiModule } from './ui/billing-ui.module';

/**
 * Billing Module
 */
@NgModule({
  declarations: [...BILLING_COMPONENTS],
  imports: [SharedModule, ClientsSharedModule, BillingUiModule, BILLING_ROUTES],
})
export class BillingModule {}
