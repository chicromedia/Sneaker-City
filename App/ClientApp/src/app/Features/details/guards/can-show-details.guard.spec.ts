import { TestBed } from '@angular/core/testing';

import { CanShowDetailsGuard } from './can-show-details.guard';

describe('CanShowDetailsGuard', () => {
  let guard: CanShowDetailsGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanShowDetailsGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
