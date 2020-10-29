import { TestBed } from '@angular/core/testing';

import { EliminarPublicacionService } from './eliminar-publicacion.service';

describe('EliminarPublicacionService', () => {
  let service: EliminarPublicacionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EliminarPublicacionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
