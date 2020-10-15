import { TestBed } from '@angular/core/testing';

import { VerTareaService } from './ver-tarea.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('VerTareaService', () => {
  let service: VerTareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ]
    });
    service = TestBed.inject(VerTareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
