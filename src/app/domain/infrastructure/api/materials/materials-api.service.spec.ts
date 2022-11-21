import { TestBed } from '@angular/core/testing';
import { MaterialsApiService } from './materials-api.service';

describe('MaterialsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaterialsApiService = TestBed.inject(MaterialsApiService);
    expect(service).toBeTruthy();
  });
});
