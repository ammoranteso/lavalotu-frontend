import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateBillComponent } from './create-bill.component';

describe('CreateBillComponent', () => {
  let component: CreateBillComponent;
  let fixture: ComponentFixture<CreateBillComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CreateBillComponent],
    });
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateBillComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });
});
