import { TestBed } from '@angular/core/testing';

import { CanCartViewGuard } from './can-cart-view.guard';

describe('CanCartViewGuard', () => {
  let guard: CanCartViewGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(CanCartViewGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
