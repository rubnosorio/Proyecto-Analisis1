import { TestBed } from '@angular/core/testing';

import { VerExamenService } from './ver-examen.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

fdescribe('VerExamenService', () => {
  let service: VerExamenService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
    });
    service = TestBed.inject(VerExamenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
