import { TestBed } from '@angular/core/testing';

import { VerExamenService } from './ver-examen.service';

describe('VerExamenService', () => {
  let service: VerExamenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerExamenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
