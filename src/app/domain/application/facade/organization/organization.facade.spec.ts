import { TestBed } from '@angular/core/testing';
import { OrganizationFacade } from './organization.facade';

describe('OrganizationFacade', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrganizationFacade = TestBed.inject(OrganizationFacade);
    expect(service).toBeTruthy();
  });
});
