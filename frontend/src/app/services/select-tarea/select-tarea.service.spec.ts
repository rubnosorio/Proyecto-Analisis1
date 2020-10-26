import { TestBed } from '@angular/core/testing';

import { SelectTareaService } from './select-tarea.service';

fdescribe('Select-Tarea-Service', () => {
  let service: SelectTareaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectTareaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  describe('Dado que quiero las tareas que tengo de una clase',()=>{
    let mockServicio=jasmine.createSpy().and.callFake(function(id_clase,id_usuario){
      var lista_tareas=[];
      return lista_tareas;
    });
    describe('Cuando entro a la clase que quiero ver', ()=>{
      it('Entonces obtengo la lista de tareas de la clase'),()=>{
        expect(mockServicio(1,1)).toBeGreaterThanOrEqual(0);
      }
    });
  });
});
