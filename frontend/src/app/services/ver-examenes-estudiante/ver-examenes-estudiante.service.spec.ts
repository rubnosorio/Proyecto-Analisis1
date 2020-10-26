import { TestBed } from '@angular/core/testing';

import { VerExamenesEstudianteService } from './ver-examenes-estudiante.service';

describe('VerExamenesEstudianteService', () => {
  let service: VerExamenesEstudianteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerExamenesEstudianteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
