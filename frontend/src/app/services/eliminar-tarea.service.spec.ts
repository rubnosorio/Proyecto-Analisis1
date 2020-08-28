import { TestBed } from '@angular/core/testing';

import { EliminarTareaService } from './eliminar-tarea.service';

describe('EliminarTareaService', () => {
  let service: EliminarTareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EliminarTareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
