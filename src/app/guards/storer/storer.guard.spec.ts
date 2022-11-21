import { TestBed } from '@angular/core/testing';

import { StorerGuard } from './storer.guard';

describe('StorerGuard', () => {
  let guard: StorerGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(StorerGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
