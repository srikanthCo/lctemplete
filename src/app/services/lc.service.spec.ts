import { TestBed, inject } from '@angular/core/testing';

import { LcService } from './lc.service';

describe('LcService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LcService]
    });
  });

  it('should be created', inject([LcService], (service: LcService) => {
    expect(service).toBeTruthy();
  }));
});
