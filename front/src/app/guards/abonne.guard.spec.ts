import { TestBed } from '@angular/core/testing';

import { AbonneGuard } from './abonne.guard';

describe('AbonneGuard', () => {
  let guard: AbonneGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(AbonneGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
