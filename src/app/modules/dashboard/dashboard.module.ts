import { NgModule } from '@angular/core';
import { DASHBOARD_ROUTES } from './dashboard.routes';
import { DASHBOARD_COMPONENTS } from '.';
import { SharedModule } from '@custom-modules/shared.module';
import { PipesModule } from '@modules/shared/pipes/pipes.module';
import { CurrencyPipe } from '@angular/common';

/**
 * Dashboard Module
 */
@NgModule({
  declarations: [...DASHBOARD_COMPONENTS],
  imports: [SharedModule, DASHBOARD_ROUTES, PipesModule],
  providers: [CurrencyPipe],
})
export class DashboardModule {}
