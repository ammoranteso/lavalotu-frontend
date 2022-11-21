import { TestBed } from '@angular/core/testing';
import { MaterialsFacade } from './materials.facade';

describe('MaterialsFacade', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: MaterialsFacade = TestBed.inject(MaterialsFacade);
    expect(service).toBeTruthy();
  });
});
