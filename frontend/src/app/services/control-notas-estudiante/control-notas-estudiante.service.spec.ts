import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';

import { ControlNotasEstudianteService } from './control-notas-estudiante.service';

describe('ControlNotasEstudianteService', () => {
  let service: ControlNotasEstudianteService;

  describe('Given ControlNotasEstudiante', () => {
    beforeEach(() => {
      TestBed.configureTestingModule({
        imports: [HttpClientModule],
        providers: [ControlNotasEstudianteService, HttpClient]
      });
      service = TestBed.inject(ControlNotasEstudianteService);
    });
  
    it('should be created', () => {
      expect(service).toBeTruthy();
    });
  });

  describe('Then Verificacion de Obtencion de Tareas y Examenes', () => {
    it('verificacion de funcionamiento del endpoint que obtiene tareas', (done) => {
      expect(service.get_tareas(data)).subscribe(res => {
        expect(res.length).toBeGreaterThan(0);
        done();
      });
    });
  });
});
