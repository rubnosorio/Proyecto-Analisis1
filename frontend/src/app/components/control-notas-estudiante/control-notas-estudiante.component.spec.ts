import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ControlNotasEstudianteComponent } from './control-notas-estudiante.component';
import { Tarea } from '../../models/tarea';
import { Examen } from '../../models/examen';
import { Usuario } from 'src/app/models/usuario';
import { ControlNotasEstudianteService } from '../../services/control-notas-estudiante/control-notas-estudiante.service'
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from '../login/login.component';
import { PrincipalEstudianteComponent } from '../principal-estudiante/principal-estudiante.component';

describe('ControlNotasEstudianteComponent', () => {
  let component: ControlNotasEstudianteComponent;
  let fixture: ComponentFixture<ControlNotasEstudianteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientModule,
        RouterTestingModule.withRoutes(
          [
            {
              path: 'login',
              component: LoginComponent
            },
            {
              path: 'principal_estudiante',
              component: PrincipalEstudianteComponent
            }
          ]
        ),
      ],
      providers: [ControlNotasEstudianteService, HttpClient],
      declarations: [ ControlNotasEstudianteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    sessionStorage.setItem("id_usuario","1");
    sessionStorage.setItem("id_clase","1");
    fixture = TestBed.createComponent(ControlNotasEstudianteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  beforeEach(() => {
    sessionStorage.removeItem("id_usuario");
    sessionStorage.removeItem("id_clase");
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  /*it('should Obtener Estudiante', () => {
      let prueba = new Usuario(1,'mario alejando','gonzales perez','mario123','1234','mario123@gmail.com');
      expect(component.obtenerEstudiante()).toBeTruthy(prueba);
  });*/

  /*it('should Cantidad de tareas valido', () => {
      expect(component.CantidadValida(component.tareas.length)).toBeTrue();
  });*/

  it('should Cantidad de examenes valido', () => {
    expect(component.CantidadValida(component.examenes.length)).toBeTrue();
  });

  it('should Nota del curso valida', () => {
    expect(component.NotaValida(80)).toBeTrue();
  });

});
