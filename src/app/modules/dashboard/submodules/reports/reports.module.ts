import { NgModule } from '@angular/core';
import { REPORTS_ROUTES } from './reports.routes';
import { REPORTS_COMPONENTS } from '.';
import { SharedModule } from '@custom-modules/shared.module';

/**
 * Reports Module
 */
@NgModule({
  declarations: [...REPORTS_COMPONENTS],
  imports: [
    SharedModule,
    REPORTS_ROUTES
  ]
})
export class ReportsModule { }
