import { OnDestroy, ViewChild } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, FormGroupDirective, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EmployeeFacade, EstablishmentFacade } from '@domain/application/facade';
import { IEmployee } from '@domain/model/interfaces';
import { NgslOption } from '@ngsl/components';
import { DASHBOARD_BASE, EMPLOYEE_BASE, PASSWORD_VALIDATOR } from '@utils/constants';
import { Observable } from 'rxjs';
import { SubSink } from 'subsink';

/**
 * `Smart Component` : Contain a form for employee creation
 */
@Component({
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.scss']
})
export class CreateEmployeeComponent implements OnInit, OnDestroy {

  /**
   * Variable to set Form
   */
  employeeForm!: FormGroup;

  /**
   * Currency date
   */
  currency: Date = new Date();

  /**
   * Observable variable for employee
   */
  employeeObs$!: Observable<IEmployee>;

  /**
   * Observable to get data of selector
   */
  pickRole$!: Observable<NgslOption[]>;

  /**
   * Reference to clear form when the data
   * has been sent
   */

  @ViewChild(FormGroupDirective, { static: true })
  templateFormReference?: FormGroupDirective;

  /**
   * Subscriptions clean handler
   */
  subSink = new SubSink();

  /**
   * Extract one establishment
   */
  pickEstablishments$!: Observable<NgslOption[]>;

  /**
   * Overrides custom style over some
   * form input fields
   */
  ngStyle = {
    width: '200px',
    cursor: 'pointer'
  };

  constructor(
    private readonly employeeFacade: EmployeeFacade,
    private readonly establishmentFacade: EstablishmentFacade,
    private readonly router: Router
  ) { }

  // tslint:disable-next-line: completed-docs
  ngOnInit(): void {
    this.createForm();
    this.getEstablishment();
    this.getRolesEmployee();
  }

  /**
   * Set the value for the form creation
   */
  createForm(): void {
    this.employeeForm = new FormGroup({
      establishmentId: new FormControl(null),
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      surname: new FormControl(null, [Validators.required]),
      document: new FormControl(null, [Validators.required, Validators.minLength(3),
      Validators.maxLength(10)]),
      phoneNumber: new FormControl(null, [Validators.required, Validators.minLength(7),
      Validators.maxLength(10)]),
      email: new FormControl(null, [Validators.required, Validators.email]),
      role: new FormControl(null),
      password: new FormControl(null, [Validators.required,
      Validators.pattern(PASSWORD_VALIDATOR)]),
      address: new FormControl(null, [Validators.required]),
      entryDate: new FormControl(this.currency, [Validators.required])
    });

  }

  /**
   * Get the employee's role
   */
  getRolesEmployee(): void {
    this.pickRole$ = this.employeeFacade.getRolesEmployeeOptions();
  }
  /**
   * Submit form employee creation
   */
  onSubmit(): void {
    console.log(this.employeeForm);
    if (this.employeeForm.valid) {
      this.subSink.sink = this.employeeFacade.createEmployee({
        ...this.employeeForm.value,
      }).subscribe(data => {
        if (data.payload) {
          this.employeeForm.reset();
          this.templateFormReference?.resetForm();
          this.router.navigate(['/', DASHBOARD_BASE, EMPLOYEE_BASE]);
        }
      });
    } else {
      this.employeeForm.markAllAsTouched();
      this.templateFormReference?.resetForm();
    }

  }
  /**
   * Allows to get all establishment
   */
  getEstablishment(): void {
    this.pickEstablishments$ = this.establishmentFacade.getEstablishmentOptions();
  }

  // tslint:disable-next-line: completed-docs
  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

}
