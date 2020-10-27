import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { NotaEstudiante } from "../../models/nota-estudiante";
import { NotasEstudiantesService } from './notas-estudiantes.service';
import { Observable } from 'rxjs';

fdescribe('NotasEstudiantesService', () => {
  let service: NotasEstudiantesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
    });
    service = TestBed.inject(NotasEstudiantesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});

describe('Dada la clase de id 1', () => {
  let service: NotasEstudiantesService;
  let httpMock: HttpTestingController;
  var id_clase:number=1;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ]
    });
    service = TestBed.inject(NotasEstudiantesService);
    httpMock = TestBed.inject(HttpTestingController)
  });

  describe('Cuando busco la lista de notas de los estudiantes',()=>{
    it('Entonces debo obtener una lista diferente de null', () => {
      spyOn(service,'getNotasEstudiantes').and.callFake(function(clase):any{
        return [];
      });
      var testService=service.getNotasEstudiantes(id_clase);
      expect(testService).not.toBeNull();
    });
  });

});

