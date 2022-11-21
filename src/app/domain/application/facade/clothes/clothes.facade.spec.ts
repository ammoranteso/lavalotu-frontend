import { TestBed } from '@angular/core/testing';
import { ClothesFacade } from './clothes.facade';

describe('ClothesFacade', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ClothesFacade = TestBed.inject(ClothesFacade);
    expect(service).toBeTruthy();
  });
});
