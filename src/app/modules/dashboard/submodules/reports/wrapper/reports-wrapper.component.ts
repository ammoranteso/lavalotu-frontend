import { Component, OnDestroy, OnInit } from '@angular/core';
import { ExpensesFacade } from '@domain/application/facade';
import { IExpense } from '@domain/model/interfaces';
import { LocalstorageService } from '@services/localstorage/localstorage.service';
import { ModalsService } from '@services/modals/modals.service';
import { SessionService } from '@services/session/session.service';
import { IFacadeApiMap } from '@utils/interfaces/auxiliary';
import { Observable } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { SubSink } from 'subsink';

/**
 * Reports module wrapper
 */
@Component({
  templateUrl: './reports-wrapper.component.html',
  styleUrls: ['./reports-wrapper.component.scss'],
})
export class ReportsWrapperComponent implements OnInit, OnDestroy {
  /**
   * The subscription sink object that stores all subscriptions
   */
  subs = new SubSink();

  /**
   * All expenses from service
   */
  expenses$!: Observable<IFacadeApiMap<IExpense[]>>;

  /**
   * Form used to serialize the expense to create, with all data required
   */
  createExpenseForm = new FormGroup({
    name: new FormControl(null, [Validators.required, Validators.minLength(6)]),
    observation: new FormControl(''),
    value: new FormControl(null, [Validators.required]),
    establishmentId: new FormControl(null),
    employeeUserId: new FormControl(null),
  });

  constructor(
    private readonly sessionService: SessionService,
    private readonly localstorageService: LocalstorageService,
    private readonly expensesFacade: ExpensesFacade,
    private readonly modalsService: ModalsService
  ) {}

  /**
   * Shows the create expense modal
   */
  showCreateModal(): void {
    this.subs.sink = this.modalsService
      .showCreateExpenseModal()
      .afterClosed()
      .subscribe((x) => {
        this.createExpenseForm.setValue({
          name: x.value.name,
          observation: 'Not yet implemented',
          value: x.value.value,
          establishmentId: this.localstorageService.establishmentId,
          employeeUserId: this.sessionService.getUserId(
            this.localstorageService.token
          ),
        });
        // console.log(this.createExpenseForm.value);
        this.subs.sink = this.expensesFacade
          .createExpense(this.createExpenseForm.value)
          .subscribe(() => {
            this.rehydrateExpenses();
          });
      });
  }

  /**
   * Rehydrates the expenses list
   */
  rehydrateExpenses(): void {
    this.expenses$ = this.expensesFacade.getAllExpenses();
  }

  // tslint:disable-next-line: completed-docs
  ngOnInit(): void {
    this.rehydrateExpenses();
  }

  // tslint:disable-next-line: completed-docs
  ngOnDestroy(): void {
    this.subs.unsubscribe();
  }
}
