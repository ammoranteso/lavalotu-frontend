import { Component, Input, OnInit } from '@angular/core';
import { IExpense } from '@domain/model/interfaces';

/**
 * DUMB: Component used to show every expense with detail
 */
@Component({
  templateUrl: './expense-row.component.html',
  styleUrls: ['./expense-row.component.scss'],
  selector: 'app-expense-row',
})
export class ExpenseRowComponent implements OnInit {
  @Input()
  expense!: IExpense;

  /**
   * Date with format
   */
  expenseDate: string = '';

  /**
   * Value with currency format
   */
  expenseValue: string = '';

  /**
   * Parses the date
   */
  parseDate(): string {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    if (this.expense.createdAt) {
      return new Date(this.expense.createdAt).toLocaleDateString(
        'es-CO',
        options
      );
    } else {
      return 'F';
    }
  }

  /**
   * Parses the value of the expense to currency
   */
  parseCurrency(): string {
    const formatter = new Intl.NumberFormat('es-CO', {
      style: 'currency',
      currency: 'COP',
      minimumFractionDigits: 0,
    });
    // console.log(formatter.format(this.expense.value));
    return formatter.format(this.expense.value);
  }

  // tslint:disable-next-line: completed-docs
  ngOnInit() {
    this.expenseDate = this.parseDate();
    this.expenseValue = this.parseCurrency();
  }
}
