import { TestBed } from '@angular/core/testing';

import { ServiceCrearTareaService } from './service-crear-tarea.service';

describe('ServiceCrearTareaService', () => {
  let service: ServiceCrearTareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiceCrearTareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
