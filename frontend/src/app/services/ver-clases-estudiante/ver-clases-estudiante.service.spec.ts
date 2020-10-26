import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { VerClasesEstudianteService } from './ver-clases-estudiante.service';

describe('VerClasesEstudianteService', () => {
  let service: VerClasesEstudianteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [VerClasesEstudianteService, HttpClient]
    });
    service = TestBed.inject(VerClasesEstudianteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Dado un usuario que tiene registradas varias clases', () => {
    let user = {
      id_usuario: 1
    }
    it('Se obtienen correctamente sus clases', (done) => {
      let clases=0;
      service.getMockClases().subscribe((res:any[]) => {
        for(let i=0; i<res.length; i++){
          if(user.id_usuario==res[i].id_usuario){
            clases++;
          }
        }
        expect(clases).toBeGreaterThan(0);
        done();
      });
    });
  });

  describe('Dado un usuario que no tiene clases registrados', () => {
    let user = {
      id_usuario: 4
    }
    it('No es posible obtener ninguna clase', (done) => {
      let clases=0;
      service.getMockClases().subscribe((res:any[]) => {
        for(let i=0; i<res.length; i++){
          if(user.id_usuario==res[i].id_usuario){
            clases++;
          }
        }
        expect(clases).toEqual(0);
        done();
      });
    });
  });
});
