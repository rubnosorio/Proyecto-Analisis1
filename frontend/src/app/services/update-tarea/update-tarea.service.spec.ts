import { TestBed } from '@angular/core/testing';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { UpdateTareaService } from './update-tarea.service';

fdescribe('Given UpdateTareaService', () => {
  let service: UpdateTareaService;
  let MockDB;
  let mockupdate = jasmine.createSpy().and.callFake(function(tarea,dbmock){
    for(let i=0;i<dbmock.length;i++){
      if(dbmock[i].id_tarea=tarea.id_tarea){
        dbmock[i]=tarea;
        return "Tarea Actualizada";
      }
    }
    return "Tarea no Existe";
  });

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      providers: [UpdateTareaService, HttpClient]
    });
    service = TestBed.inject(UpdateTareaService);
  });

  describe('When se actualiza una tarea', () => {
    it('When es creado el servicio', () => {
      expect(service).toBeTruthy();
    });  

    it('Then tarea no existe', (done) => {
      service.getMockTareas().subscribe((ress: any[]) => {
        MockDB=ress;
        let tareafake = {
          id_tarea: 0,
          nombre_tarea: 'tarea 0',
          descripcion: 'descripcion tarea 0',
          url_directorio: '',
          url_archivo_instruccion: '',
          fecha_entrega: '15/09/2020',
          valor_tarea: 3
        }
        expect(mockupdate(tareafake,MockDB)).toContain('no');
        done();
      });
    }); 

    it('Then tarea existe', (done) => {
      service.getMockTareas().subscribe((ress: any[]) => {
        MockDB=ress;
        let tareafake = {
          id_tarea: 1,
          nombre_tarea: 'tarea actualizada',
          descripcion: 'descripcion tarea actualizada',
          url_directorio: '',
          url_archivo_instruccion: '',
          fecha_entrega: '23/09/2020',
          valor_tarea: 5
        }
        expect(mockupdate(tareafake,MockDB)).toEqual('Tarea Actualizada');
        done();
      });
    });
  });
});
