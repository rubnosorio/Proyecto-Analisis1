import { TestBed } from '@angular/core/testing';

import { VistaCursosPofesorService } from './vista-cursos-pofesor.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('VistaCursosPofesorService', () => {
  let service: VistaCursosPofesorService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
    });
    service = TestBed.inject(VistaCursosPofesorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
