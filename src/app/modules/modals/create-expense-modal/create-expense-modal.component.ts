import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';

/**
 * DUMB: Modal used to input the expense to create
 */
@Component({
  selector: 'app-create-expense-modal',
  templateUrl: './create-expense-modal.component.html',
  styleUrls: ['./create-expense-modal.component.scss'],
})
export class CreateExpenseModalComponent {
  /**
   * Form used to serialize the expense to create
   */
  createExpenseForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    value: new FormControl(null, [Validators.required]),
  });

  constructor(
    public readonly dialogRef: MatDialogRef<CreateExpenseModalComponent>
  ) {
    dialogRef.disableClose = true;
  }

  /**
   * Confirms the expense to create
   */
  confirmExpense(): void {
    if (this.createExpenseForm.valid) {
      this.dialogRef.close(this.createExpenseForm);
    }
  }
}
