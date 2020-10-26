import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { VerExamenesEstudianteService } from './ver-examenes-estudiante.service';

describe('VerExamenesEstudianteService', () => {
  let service: VerExamenesEstudianteService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [VerExamenesEstudianteService, HttpClient]
    });
    service = TestBed.inject(VerExamenesEstudianteService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  describe('Dado que una clase tiene varios examenes', () => {
    it('Se obtienen correctamente los examenes', (done) => {
        service.getMockClases().subscribe((res:any[]) => {
          let clasefake = {
            id_clase: res[0].id_clase,
            nombre_clase: res[0].nombre_clase,
            cod_acceso: res[0].cod_acceso,
            id_usuario: res[0].id_usuario
          }
          service.getMockExamenes().subscribe((res:any[]) => {
              let examenes=0;
              for(let i=0; i<res.length; i++){
                if(clasefake.id_clase==res[i].id_clase){
                  examenes++;
                }
              }
              expect(examenes).toBeGreaterThan(0);
              done();
          });
        })
    });
  });

  describe('Dado que una clase no tiene examenes', () => {
    it('No se logra obtener ningun examen', (done) => {
        service.getMockClases().subscribe((res:any[]) => {
          let clasefake = {
            id_clase: res[1].id_clase,
            nombre_clase: res[1].nombre_clase,
            cod_acceso: res[1].cod_acceso,
            id_usuario: res[1].id_usuario
          }
          service.getMockExamenes().subscribe((res:any[]) => {
              let examenes=0;
              for(let i=0; i<res.length; i++){
                if(clasefake.id_clase==res[i].id_clase){
                  examenes++;
                }
              }
              expect(examenes).toEqual(0);
              done();
          });
        })
    });
  });
});
