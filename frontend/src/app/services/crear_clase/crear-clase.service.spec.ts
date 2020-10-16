import { TestBed } from '@angular/core/testing';

import { CrearClaseService } from './crear-clase.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('CrearClaseService', () => {
  let service: CrearClaseService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ]
    });
    service = TestBed.inject(CrearClaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
