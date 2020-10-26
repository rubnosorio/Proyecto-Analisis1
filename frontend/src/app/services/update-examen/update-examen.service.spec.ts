import { TestBed } from '@angular/core/testing';

import { UpdateExamenService } from './update-examen.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

fdescribe('UpdateExamenService', () => {
  let service: UpdateExamenService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
    });
    service = TestBed.inject(UpdateExamenService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
