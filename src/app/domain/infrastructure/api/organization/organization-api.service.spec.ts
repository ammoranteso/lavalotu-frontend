import { TestBed } from '@angular/core/testing';
import { OrganizationApiService } from './organization-api.service';

describe('OrganizationApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: OrganizationApiService = TestBed.inject(OrganizationApiService);
    expect(service).toBeTruthy();
  });
});
