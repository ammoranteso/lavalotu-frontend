import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { ListEmployeesComponent } from './list-employees.component';
import { RouterTestingModule } from '@angular/router/testing';
import { CreateEmployeeComponent } from '../create-employee/create-employee.component';

describe('ListEmployeesComponent', () => {
  let component: ListEmployeesComponent;
  let fixture: ComponentFixture<ListEmployeesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ListEmployeesComponent, CreateEmployeeComponent],
      imports: [
        RouterTestingModule.withRoutes(
          [
            {
              path: '/',
              component: ListEmployeesComponent
            },
            {
              path: 'new',
              component: CreateEmployeeComponent
            }

          ]
        )
      ],
      providers: [
        { provide: Router, useValue: Location }
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListEmployeesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should navigate to / before + button click', () => {
    const location: Location = TestBed.inject(Location);
    expect(location.path()).toBe('/');
  });

  it('should navigate to /new on + button click', () => {
    const location: Location = TestBed.inject(Location);
    expect(location.path()).toBe('/new');
  });
});
