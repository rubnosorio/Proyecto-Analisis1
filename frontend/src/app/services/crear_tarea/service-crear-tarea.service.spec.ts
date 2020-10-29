import { TestBed } from '@angular/core/testing';

import { ServiceCrearTareaService } from './service-crear-tarea.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

fdescribe('ServiceCrearTareaService', () => {
  let service: ServiceCrearTareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
    });
    service = TestBed.inject(ServiceCrearTareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
