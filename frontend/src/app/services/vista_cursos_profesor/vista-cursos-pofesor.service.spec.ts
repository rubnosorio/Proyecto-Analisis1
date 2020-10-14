import { TestBed } from '@angular/core/testing';

import { VistaCursosPofesorService } from './vista-cursos-pofesor.service';

describe('VistaCursosPofesorService', () => {
  let service: VistaCursosPofesorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VistaCursosPofesorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
