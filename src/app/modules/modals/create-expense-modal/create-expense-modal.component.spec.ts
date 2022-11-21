import {
  async,
  ComponentFixture,
  fakeAsync,
  TestBed,
} from '@angular/core/testing';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';

import { CreateExpenseModalComponent } from './create-expense-modal.component';

fdescribe('CreateExpenseModalComponent', () => {
  let component: CreateExpenseModalComponent;
  let fixture: ComponentFixture<CreateExpenseModalComponent>;

  const mockDialogRef = {
    close: jasmine.createSpy('close'),
  };

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateExpenseModalComponent],
      imports: [MatDialogModule],
      providers: [
        {
          provide: MatDialogRef,
          useValue: mockDialogRef,
        },
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateExpenseModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
    // Pretty pretty important reset the spy counter if it's defined globally in the spec
    mockDialogRef.close.calls.reset();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('on valid form and confirm call should close the dialog', fakeAsync(() => {
    component.createExpenseForm.controls.name?.setValue('Testeando ando');
    component.createExpenseForm.controls.value?.setValue(25000);
    expect(component.createExpenseForm.valid).toBe(true);
    component.confirmExpense();
    expect(mockDialogRef.close).toHaveBeenCalled();
  }));

  it('on invalid form and confirm call should not close the dialog', fakeAsync(() => {
    component.createExpenseForm.controls.name?.setValue('abcd');
    component.createExpenseForm.controls.value?.setValue(25000);
    expect(component.createExpenseForm.valid).toBe(false);
    component.confirmExpense();
    expect(mockDialogRef.close).not.toHaveBeenCalled();
  }));
});
