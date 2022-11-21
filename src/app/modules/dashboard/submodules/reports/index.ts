import { ExpenseRowComponent } from './wrapper/components/expense-row/expense-row.component';
import { ExpensesComponent } from './pages/expenses/expenses.component';
import { ReportsWrapperComponent } from './wrapper/reports-wrapper.component';

/**
 * Reports components
 */
export const REPORTS_COMPONENTS: any[] = [
  ReportsWrapperComponent,
  ExpensesComponent,
  ExpenseRowComponent,
];

/**
 * Components
 */

export * from './wrapper/reports-wrapper.component';
export * from './pages/expenses/expenses.component';
export * from './wrapper/components/expense-row/expense-row.component';
