import { TestBed, inject } from '@angular/core/testing';

import { DdbService } from './ddb.service';

describe('DdbService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [DdbService]
    });
  });

  it('should be created', inject([DdbService], (service: DdbService) => {
    expect(service).toBeTruthy();
  }));
});
