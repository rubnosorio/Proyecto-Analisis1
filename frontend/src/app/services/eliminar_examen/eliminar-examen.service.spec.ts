import { TestBed } from '@angular/core/testing';

import { EliminarExamenService } from './eliminar-examen.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

fdescribe('EliminarExamenService', () => {
  let service: EliminarExamenService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
    });
    service = TestBed.inject(EliminarExamenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
