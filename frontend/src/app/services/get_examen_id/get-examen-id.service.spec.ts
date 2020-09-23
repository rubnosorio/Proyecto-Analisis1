import { TestBed } from '@angular/core/testing';

import { GetExamenIdService } from './get-examen-id.service';

describe('GetExamenIdService', () => {
  let service: GetExamenIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GetExamenIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
