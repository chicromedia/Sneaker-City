import { TestBed } from '@angular/core/testing';

import { ComingService } from './coming.service';

describe('ComingService', () => {
  let service: ComingService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComingService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
