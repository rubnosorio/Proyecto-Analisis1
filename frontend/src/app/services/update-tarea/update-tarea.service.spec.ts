import { TestBed } from '@angular/core/testing';

import { UpdateTareaService } from './update-tarea.service';

describe('UpdateTareaService', () => {
  let service: UpdateTareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UpdateTareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
