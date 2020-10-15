import { TestBed } from '@angular/core/testing';

import { GetExamenIdService } from './get-examen-id.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

describe('GetExamenIdService', () => {
  let service: GetExamenIdService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
    });
    service = TestBed.inject(GetExamenIdService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
