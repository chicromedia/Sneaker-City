import { TestBed } from '@angular/core/testing';

import { CanConfirmGuard } from './can-confirm.guard';

describe('CanConfirmGuard', () => {
  let guard: CanConfirmGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanConfirmGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
