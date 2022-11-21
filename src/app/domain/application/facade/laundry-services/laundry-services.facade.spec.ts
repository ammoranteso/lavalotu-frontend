import { TestBed } from '@angular/core/testing';
import { LaundryServicesFacade } from './laundry-services.facade';

describe('ServicesFacade', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LaundryServicesFacade = TestBed.inject(LaundryServicesFacade);
    expect(service).toBeTruthy();
  });
});
