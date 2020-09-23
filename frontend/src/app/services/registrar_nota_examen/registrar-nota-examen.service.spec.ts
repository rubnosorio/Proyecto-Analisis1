import { TestBed } from '@angular/core/testing';

import { RegistrarNotaExamenService } from './registrar-nota-examen.service';

describe('RegistrarNotaExamenService', () => {
  let service: RegistrarNotaExamenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistrarNotaExamenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
