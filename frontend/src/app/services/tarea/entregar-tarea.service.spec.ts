import { TestBed } from '@angular/core/testing';

import { EntregarTareaService } from './entregar-tarea.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('EntregarTareaService', () => {
  let service: EntregarTareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ]
    });
    service = TestBed.inject(EntregarTareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
