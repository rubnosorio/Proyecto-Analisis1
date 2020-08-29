import { TestBed } from '@angular/core/testing';

import { VerTareaService } from './ver-tarea.service';

describe('VerTareaService', () => {
  let service: VerTareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerTareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
