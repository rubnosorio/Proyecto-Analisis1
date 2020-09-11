import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ControlNotasEstudianteComponent } from './control-notas-estudiante.component';
import { Tarea } from '../../models/tarea';
import { Examen } from '../../models/examen';
import { Usuario } from 'src/app/models/usuario';

fdescribe('ControlNotasEstudianteComponent', () => {
  let component: ControlNotasEstudianteComponent;
  let fixture: ComponentFixture<ControlNotasEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ControlNotasEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ControlNotasEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should Obtener Estudiante', () => {
      let prueba = new Usuario(1,'mario alejando','gonzales perez','mario123','1234','mario123@gmail.com');
      expect(component.obtenerEstudiante()).toBeTruthy(prueba);
  });

});
