import { TestBed } from '@angular/core/testing';

import { CrearExamenService } from './crear-examen.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

fdescribe('CrearExamenService', () => {
  let service: CrearExamenService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
    });
    service = TestBed.inject(CrearExamenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
