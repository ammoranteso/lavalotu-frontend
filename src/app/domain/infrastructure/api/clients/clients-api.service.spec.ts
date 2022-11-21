import { TestBed } from '@angular/core/testing';
import { ClientsApiService } from './clients-api.service';

describe('ClientsApiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientsApiService = TestBed.inject(ClientsApiService);
    expect(service).toBeTruthy();
  });
});
