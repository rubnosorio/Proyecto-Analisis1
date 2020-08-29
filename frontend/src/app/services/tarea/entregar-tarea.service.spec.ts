import { TestBed } from '@angular/core/testing';

import { EntregarTareaService } from './entregar-tarea.service';

describe('EntregarTareaService', () => {
  let service: EntregarTareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntregarTareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
