import { TestBed } from '@angular/core/testing';
import { ClientsFacade } from './clients.facade';

describe('ClientsFacade', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClientsFacade = TestBed.inject(ClientsFacade);
    expect(service).toBeTruthy();
  });
});
