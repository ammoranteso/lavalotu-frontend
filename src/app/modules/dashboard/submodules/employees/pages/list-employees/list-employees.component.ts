import { Component, OnDestroy, OnInit } from '@angular/core';
import { EmployeeFacade } from '@domain/application/facade';
import { IEmployee } from '@domain/model/interfaces';
import { NgslOption } from '@ngsl/components';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SubSink } from 'subsink';

/**
 * Type with employee list and dictionary
 */
type EmployeeInfo = IEmployee & {
  employeeDic: { [key: string]: string };
};

/**
 * `Semi Smart component`: Allows to list the employees
 */
@Component({
  selector: 'app-list-employees',
  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.scss']
})
export class ListEmployeesComponent implements OnInit, OnDestroy {

  /**
   * Ordering options
   */
  datesOptions: NgslOption[] = [
    {
      label: '12/09/2020',
      value: true
    },
    {
      label: '13/09/2020',
      value: true
    },
  ];
  /**
   * Observable variable for employee
   */
  employeeObs$!: Observable<EmployeeInfo[]>;

  /**
   * The current page
   */
  currentPage: number = 1;

  /**
   * The max pages
   */
  totalPages: number = -1;

  /**
   * The current query
   */
  currentQuery?: string;

  /**
   * Subscriptions clean handler
   */
  subSink = new SubSink();

  constructor(
    private readonly employeeFacade: EmployeeFacade,
  ) { }

  // tslint:disable-next-line: completed-docs
  ngOnInit(): void {
    this.getAllEmployees();
  }

  /**
   * Allows to get the employee's information
   */
  getAllEmployees(): void {
    this.employeeObs$ = this.employeeFacade.getAllEmployees({
      Page: this.currentPage,
      Name: this.currentQuery,
    }).pipe(
      map(data => {
        if (data.payload) {
          this.totalPages = data.payload.totalPages;
          return data.payload.items.map(br => ({
            ...br,
            employeeDic: {
              name: `${br.name}${' '}${br.surname}`,
              document: `${br.document}`,
              job: `${br.entryDate}`,
              branch: `${br.address}`,
              phone: `${br.phoneNumber}`
            }
          }));
        }
        return [];
      })
    );
  }

  /**
   * Handles prev page request
   */
  onPrevPage(): void {
    this.currentPage--;
    this.getAllEmployees();
  }

  /**
   * Handles next page request
   */
  onNextPage(): void {
    this.currentPage++;
    this.getAllEmployees();
  }

  /**
   * Registers into the contextual search service
   * a new query coming from the search input
   * @param query The new query
   */
  onQueryChange(query: string): void {
    this.currentQuery = query;
    this.currentPage = 1;
    this.getAllEmployees();
  }

  // tslint:disable-next-line: completed-docs
  ngOnDestroy(): void {
    this.subSink.unsubscribe();
  }

}
