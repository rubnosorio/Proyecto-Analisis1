import { TestBed } from '@angular/core/testing';

import { EliminarExamenService } from './eliminar-examen.service';

describe('EliminarExamenService', () => {
  let service: EliminarExamenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EliminarExamenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
