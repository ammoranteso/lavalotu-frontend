import { HttpClientTestingModule } from '@angular/common/http/testing';
import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
} from '@angular/core/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterTestingModule } from '@angular/router/testing';
import { UiModule } from '@modules/shared/ui/ui.module';
import { AppModule } from 'app/app.module';

import { ClientsDetailComponent } from './clients-detail.component';

fdescribe('ClientsDetailComponent', () => {
  let component: ClientsDetailComponent;
  let fixture: ComponentFixture<ClientsDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ClientsDetailComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        AppModule,
        UiModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ClientsDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('form should be valid', fakeAsync(() => {
    component.createClientForm.controls.name?.setValue('Daniel Castañeda');
    component.createClientForm.controls.documentNumber?.setValue('2123123');
    component.createClientForm.controls.address?.setValue('Calle 1 # 1-1');
    component.createClientForm.controls.phoneNumber?.setValue('1234568765');
    component.createClientForm.controls.email?.setValue('adasd@sadasd.com');
    expect(component.createClientForm.valid).toBe(true);
  }));

  it('form should be invalid (Document lenght)', fakeAsync(() => {
    component.createClientForm.controls.name?.setValue('Daniel Castañeda');
    component.createClientForm.controls.documentNumber?.setValue('123');
    component.createClientForm.controls.address?.setValue('Calle 1 # 1-1');
    component.createClientForm.controls.phoneNumber?.setValue('1234568765');
    component.createClientForm.controls.email?.setValue('adasd@sadasd.com');
    expect(component.createClientForm.valid).toBe(false);
  }));

  it('form should be invalid (Invalid email)', fakeAsync(() => {
    component.createClientForm.controls.name?.setValue('Daniel Castañeda');
    component.createClientForm.controls.documentNumber?.setValue('123465');
    component.createClientForm.controls.address?.setValue('Calle 1 # 1-1');
    component.createClientForm.controls.phoneNumber?.setValue('1234568765');
    component.createClientForm.controls.email?.setValue('adassd.com');
    expect(component.createClientForm.valid).toBe(false);
  }));

  it('form should be invalid (No name)', fakeAsync(() => {
    component.createClientForm.controls.name?.setValue('  a');
    component.createClientForm.controls.documentNumber?.setValue('123465');
    component.createClientForm.controls.address?.setValue('Calle 1 # 1-1');
    component.createClientForm.controls.phoneNumber?.setValue('1234568765');
    component.createClientForm.controls.email?.setValue('adasd@sadasd.com');
    expect(component.createClientForm.valid).toBe(false);
  }));

  it('form should be invalid (Address lenght)', fakeAsync(() => {
    component.createClientForm.controls.name?.setValue('  a');
    component.createClientForm.controls.documentNumber?.setValue('123465');
    component.createClientForm.controls.address?.setValue('Calle');
    component.createClientForm.controls.phoneNumber?.setValue('1234568765');
    component.createClientForm.controls.email?.setValue('adasd@sadasd.com');
    expect(component.createClientForm.valid).toBe(false);
  }));
});
