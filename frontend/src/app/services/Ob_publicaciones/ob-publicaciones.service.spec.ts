import { TestBed } from '@angular/core/testing';

import { ObPublicacionesService } from './ob-publicaciones.service';

describe('ObPublicacionesService', () => {
  let service: ObPublicacionesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ObPublicacionesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
