import { TestBed } from '@angular/core/testing';

import { UnirseAClaseService } from './unirse-a-clase.service';

fdescribe('UnirseAClaseService', () => {
  let service: UnirseAClaseService;
  let existe:boolean;
  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UnirseAClaseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  fdescribe("Given Servicio y DB unirse a clase", ()=> {
    fdescribe("When llamo metodo post a backend ", ()=> {
      fit("Then debería verificar si existe esa clase e insertarlo", function(done) {
        expect(mockPost('Teoría des sitemas 1')).toEqual(200);
      });
    });
  });
  
});
