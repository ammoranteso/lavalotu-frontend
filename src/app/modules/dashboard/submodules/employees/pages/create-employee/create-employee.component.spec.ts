import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, fakeAsync, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { UiModule } from '@modules/shared/ui/ui.module';

import { CreateEmployeeComponent } from './create-employee.component';

describe('CreateEmployeeComponent', () => {
  let component: CreateEmployeeComponent;
  let fixture: ComponentFixture<CreateEmployeeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateEmployeeComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        UiModule,
      ]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateEmployeeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be valid', fakeAsync(() => {
    component.employeeForm.controls.establishmentId?.setValue('231231233');
    component.employeeForm.controls.name?.setValue('Andres');
    component.employeeForm.controls.surname?.setValue('Morantes');
    component.employeeForm.controls.document?.setValue('12345678');
    component.employeeForm.controls.phoneNumber?.setValue('1234567');
    component.employeeForm.controls.email?.setValue('andres@fake.com');
    component.employeeForm.controls.role?.setValue('Storer');
    component.employeeForm.controls.password?.setValue('P@ssw0rd123');
    component.employeeForm.controls.address?.setValue('Calle 123#123-32');
    component.employeeForm.controls.entryDate?.setValue('2020-09-10');
    expect(component.employeeForm.valid).toBe(true);
  }));

  it('form should be invalid (Document length)', fakeAsync(() => {
    component.employeeForm.controls.establishmentId?.setValue('231231233');
    component.employeeForm.controls.name?.setValue('Andres');
    component.employeeForm.controls.surname?.setValue('Morantes');
    component.employeeForm.controls.document?.setValue('12345');
    component.employeeForm.controls.phoneNumber?.setValue('1234567');
    component.employeeForm.controls.email?.setValue('andres@fake.com');
    component.employeeForm.controls.role?.setValue('Storer');
    component.employeeForm.controls.password?.setValue('P@ssw0rd123');
    component.employeeForm.controls.address?.setValue('Calle 123#123-32');
    component.employeeForm.controls.entryDate?.setValue('2020-09-10');
    expect(component.employeeForm.valid).toBe(true);
  }));
  it('form should be invalid (PhoneNUmber length)', fakeAsync(() => {
    component.employeeForm.controls.establishmentId?.setValue('231231233');
    component.employeeForm.controls.name?.setValue('Andres');
    component.employeeForm.controls.surname?.setValue('Morantes');
    component.employeeForm.controls.document?.setValue('12345678');
    component.employeeForm.controls.phoneNumber?.setValue('12345');
    component.employeeForm.controls.email?.setValue('andres@fake.com');
    component.employeeForm.controls.role?.setValue('Storer');
    component.employeeForm.controls.password?.setValue('P@ssw0rd123');
    component.employeeForm.controls.address?.setValue('Calle 123#123-32');
    component.employeeForm.controls.entryDate?.setValue('2020-09-10');
    expect(component.employeeForm.valid).toBe(true);
  }));

});
