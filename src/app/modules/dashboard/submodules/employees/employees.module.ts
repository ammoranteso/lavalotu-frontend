import { NgModule } from '@angular/core';
import { EMPLOYEES_ROUTES } from './employees.routes';
import { EMPLOYEES_COMPONENTS } from '.';
import { SharedModule } from '@custom-modules/shared.module';
import { UiModule } from '@modules/shared/ui/ui.module';

/**
 * Employees Module
 */
@NgModule({
  declarations: [...EMPLOYEES_COMPONENTS],
  imports: [
    SharedModule,
    UiModule,
    EMPLOYEES_ROUTES],
})
export class EmployeesModule { }
