import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BillingItemComponent } from './billing-item.component';

describe('BillingItemComponent', () => {
  let component: BillingItemComponent;
  let fixture: ComponentFixture<BillingItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BillingItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BillingItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
