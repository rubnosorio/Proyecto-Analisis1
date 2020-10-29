import { TestBed } from '@angular/core/testing';

import { DarmeBajaService } from './darme-baja.service';

describe('DarmeBajaService', () => {
  let service: DarmeBajaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DarmeBajaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
