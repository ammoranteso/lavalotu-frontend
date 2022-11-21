import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloseBillingComponent } from './close-billing.component';

describe('CloseBillingComponent', () => {
  let component: CloseBillingComponent;
  let fixture: ComponentFixture<CloseBillingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloseBillingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloseBillingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
