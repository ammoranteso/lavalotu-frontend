import { Routes, RouterModule } from '@angular/router';
import { CREATE_EMPLOYEE } from '@utils/constants/routes.constant';
import { CreateEmployeeComponent } from './pages/create-employee/create-employee.component';
import { EmployeesWrapperComponent } from './wrapper/employees-wrapper.component';

/**
 * Employees routes
 */
const routes: Routes = [
  {
    path: '',
    component: EmployeesWrapperComponent,
    children: []
  },
  {
    path: CREATE_EMPLOYEE,
    component: CreateEmployeeComponent
  }
];

/**
 * Employees routes export
 */
export const EMPLOYEES_ROUTES = RouterModule.forChild(routes);
