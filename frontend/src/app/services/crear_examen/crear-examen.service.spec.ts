import { TestBed } from '@angular/core/testing';

import { CrearExamenService } from './crear-examen.service';

describe('CrearExamenService', () => {
  let service: CrearExamenService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CrearExamenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
