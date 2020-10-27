import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectTareaComponent } from './select-tarea.component';
import { SelectTareaService } from "../../services/select-tarea/select-tarea.service";
import { HttpClientModule, HttpClient } from '@angular/common/http';

fdescribe('SelectTareaComponent', () => {
  let component: SelectTareaComponent;
  let fixture: ComponentFixture<SelectTareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule],
      declarations: [ SelectTareaComponent ],
      providers:[SelectTareaService,HttpClient]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('Dado una tarea con una fecha limite de entrega',()=>{
    describe('Cuando entro a esa tarea y la fecha limite no se ha cumplido',()=>{
      let fecha='2020-11-20';
      it('Entonces si podre entregarla',()=>{
        expect(component.verificar_fecha(fecha)).toEqual(1);
      });
    });
  });

  describe('Dado una tarea con una fecha limite de entrega',()=>{
    describe('Cuando entro a esa tarea y la fecha limite ya se ha cumplido',()=>{
      let fecha='2020-10-20';
      it('Entonces no podre entregarla',()=>{
        expect(component.verificar_fecha(fecha)).toEqual(0);
      });
    });
  });

});
