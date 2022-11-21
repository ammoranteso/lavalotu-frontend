import { NgModule } from '@angular/core';
import { BILLING_UI_COMPONENTS } from '.';
import { SharedModule } from '@custom-modules/shared.module';

/**
 * BillingUi Module
 */
@NgModule({
  declarations: [...BILLING_UI_COMPONENTS],
  imports: [SharedModule],
  exports: [...BILLING_UI_COMPONENTS],
})
export class BillingUiModule {}
