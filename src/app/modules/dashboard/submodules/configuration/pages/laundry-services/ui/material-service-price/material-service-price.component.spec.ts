import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MaterialServicePriceComponent } from './material-service-price.component';

fdescribe('MaterialServicePriceComponent', () => {
  let component: MaterialServicePriceComponent;
  let fixture: ComponentFixture<MaterialServicePriceComponent>;

  const servicesMock = [
    {
      id: 'wq3123',
      name: 'Lavado',
    },
    {
      id: 'wq31232',
      name: 'Secado',
    },
  ];
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [MaterialServicePriceComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MaterialServicePriceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create array with specified length', () => {
    component.services = servicesMock;
    component.poblateArray();
    expect(component.clotheSpecificPrices.length).toBeGreaterThanOrEqual(
      servicesMock.length
    );
  });

  it('should create array with zero length', () => {
    component.poblateArray();
    expect(component.clotheSpecificPrices.length).toBe(0);
  });
});
