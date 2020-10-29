import { TestBed } from '@angular/core/testing';

import { LoginserviceService } from './loginservice.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';

fdescribe('LoginserviceService', () => {
  let service: LoginserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
    });
    service = TestBed.inject(LoginserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
