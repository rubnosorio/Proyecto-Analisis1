import { TestBed } from '@angular/core/testing';

import { UpdateExamenService } from './update-examen.service';

describe('UpdateExamenService', () => {
  let service: UpdateExamenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateExamenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
