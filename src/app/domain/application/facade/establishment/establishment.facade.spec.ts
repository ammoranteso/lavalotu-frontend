import { TestBed } from '@angular/core/testing';
import { EstablishmentFacade } from './establishment.facade';

describe('EstablishmentFacade', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstablishmentFacade = TestBed.inject(EstablishmentFacade);
    expect(service).toBeTruthy();
  });
});
