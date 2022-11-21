import { ListEmployeesComponent } from './pages/list-employees/list-employees.component';
import { CreateEmployeeComponent } from './pages/create-employee/create-employee.component';
import { EmployeesWrapperComponent } from './wrapper/employees-wrapper.component';

/**
 * Employees components
 */
export const EMPLOYEES_COMPONENTS: any[] = [
  EmployeesWrapperComponent,
  CreateEmployeeComponent,
  ListEmployeesComponent,
];

/**
 * Components
 */

export * from './wrapper/employees-wrapper.component';
export * from './pages/create-employee/create-employee.component';
export * from './pages/list-employees/list-employees.component';
