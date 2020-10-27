import { TestBed } from '@angular/core/testing';

import { RegistrarNotaExamenService } from './registrar-nota-examen.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

fdescribe('RegistrarNotaExamenService', () => {
  let service: RegistrarNotaExamenService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
    });
    service = TestBed.inject(RegistrarNotaExamenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
