import { TestBed } from '@angular/core/testing';

import { EliminarTareaService } from './eliminar-tarea.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

fdescribe('EliminarTareaService', () => {
  let service: EliminarTareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
    });
    service = TestBed.inject(EliminarTareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
