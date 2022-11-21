import {
  async,
  ComponentFixture,
  TestBed,
  fakeAsync,
} from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { LoginComponent } from '@modules/landing';
import { MaterialModule } from '@custom-modules/material.module';
import { AppModule } from 'app/app.module';
import { AuthFacade } from '@domain/application/facade';
import { UiModule } from '@modules/shared/ui/ui.module';

fdescribe('LoginComponent', () => {
  let component: LoginComponent;
  let fixture: ComponentFixture<LoginComponent>;
  let httpClient: HttpClient;
  let authFacade: AuthFacade;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [LoginComponent],
      imports: [
        ReactiveFormsModule,
        FormsModule,
        HttpClientTestingModule,
        RouterTestingModule,
        MaterialModule,
        AppModule,
        UiModule,
      ],
      providers: [{ provide: AuthFacade, useValue: {} }],
    }).compileComponents();
    httpClient = TestBed.inject(HttpClient);
    authFacade = TestBed.inject(AuthFacade);
    fixture = TestBed.createComponent(LoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('Is valid form', fakeAsync(() => {
    component.loginForm.controls.email?.setValue('test@test.com');
    component.loginForm.controls.password?.setValue('P@ssw0rd');
    expect(component.loginForm.valid).toBe(true);
  }));

  it('Is invalid form by (No password)', fakeAsync(() => {
    component.loginForm.controls.email?.setValue('test@test.com');
    component.loginForm.controls.password?.setValue('');
    expect(component.loginForm.valid).toBe(false);
  }));

  it('Is invalid form (Invalid email)', fakeAsync(() => {
    component.loginForm.controls.email?.setValue('test');
    component.loginForm.controls.password?.setValue('P@ssw0rd');
    expect(component.loginForm.valid).toBe(false);
  }));
});
