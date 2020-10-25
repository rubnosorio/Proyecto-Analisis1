import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateExamenComponent } from './update-examen.component';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from '../login/login.component';
import { Examen } from 'src/app/models/examen';

fdescribe('UpdateExamenComponent', () => {
  let component: UpdateExamenComponent;
  let fixture: ComponentFixture<UpdateExamenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        ToastrModule.forRoot(),
        HttpClientTestingModule,
        RouterTestingModule.withRoutes(
          [
            {
              path: 'login',
              component: LoginComponent
            }
          ]
        ),
      ],
      declarations: [ UpdateExamenComponent ],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    sessionStorage.setItem('examenactual',JSON.stringify(new Examen(1,'Prueba Actualizacion','2020-08-01','Examen de Prueba', 4, 15, 0, 1,'[ {\"opciones\": [{\"respuesta\": \"lunes\", \"es_correcta\": 1}, {\"respuesta\": \"martes\", \"es_correcta\": 0}, {\"respuesta\": \"miercoles\", \"es_correcta\": 0}, {\"respuesta\": \"ninguna de las anteriores es correcta\", \"es_correcta\": 0}], \"pregunta\": \"¿Que día es hoy?\", \"num_correctas\": 1, \"tipo_respuesta\": 0}, {\"opciones\": [{\"respuesta\": \"Overwatch\", \"es_correcta\": 1}, {\"respuesta\": \"COD\", \"es_correcta\": 1}, {\"respuesta\": \"PUBG\", \"es_correcta\": 1}, {\"respuesta\": \"Free Fire\", \"es_correcta\": 0}], \"pregunta\": \"¿Que juego(s) juega Erick?\", \"num_correctas\": 3, \"tipo_respuesta\": 0}, {\"opciones\": [{\"respuesta\": \"Alexander\", \"es_correcta\": 1}], \"pregunta\": \"¿Cual es el segundo nombre de Erick\", \"num_correctas\": 1, \"tipo_respuesta\": 1}, {\"opciones\": [{\"respuesta\": \"Verdadero\", \"es_correcta\": 1}, {\"respuesta\": \"Falso\", \"es_correcta\": 0}], \"pregunta\": \"¿Sale el semestre?\", \"num_correctas\": 1, \"tipo_respuesta\": 2}]')))
    fixture = TestBed.createComponent(UpdateExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  afterEach(() => {
    sessionStorage.removeItem('examenactual')
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Examen no nulo', () => {
    expect(component.examen).not.toEqual(null);
  });
  it('Examen con Preguntas', () => {
    expect(component.examen.num_preguntas).not.toEqual(0);
  });
});
