import { TestBed } from '@angular/core/testing';
import { EstablishmentApiService } from './establishment-api.service';

describe('EstablishmentApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: EstablishmentApiService = TestBed.inject(EstablishmentApiService);
    expect(service).toBeTruthy();
  });
});
