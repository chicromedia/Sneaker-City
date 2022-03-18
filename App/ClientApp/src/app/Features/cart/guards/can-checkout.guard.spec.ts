import { TestBed } from '@angular/core/testing';

import { CanCheckoutGuard } from './can-checkout.guard';

describe('CanCheckoutGuard', () => {
  let guard: CanCheckoutGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanCheckoutGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
