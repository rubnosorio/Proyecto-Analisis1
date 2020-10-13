import { TestBed } from '@angular/core/testing';

import { VerClasesEstudianteService } from './ver-clases-estudiante.service';

describe('VerClasesEstudianteService', () => {
  let service: VerClasesEstudianteService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerClasesEstudianteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
