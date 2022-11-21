import { EmployeesWrapperComponent } from './employees-wrapper.component';

fdescribe('EmployeesWrapperComponent', () => {
  let component: EmployeesWrapperComponent;

  beforeEach(() => {
    component = new EmployeesWrapperComponent();
  });

  it('should create an instance', () => {
    expect(component).toBeTruthy();
  });
});
