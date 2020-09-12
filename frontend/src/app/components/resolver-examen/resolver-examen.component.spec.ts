import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ResolverExamenComponent } from './resolver-examen.component';

describe('ResolverExamenComponent', () => {
  let component: ResolverExamenComponent;
  let fixture: ComponentFixture<ResolverExamenComponent>;

  let examen1object = JSON.parse(
    `{"id_examen":66,"nombre_examen":"1er Parcial","id_clase":1,"num_preguntas":4,"valor_examen":15,"fecha":"2020-08-15T06:00:00.000Z","estado":1,"descripcion":"este campo es obligatorio","preguntas":[{"opciones":[{"respuesta":"lunes","es_correcta":1},{"respuesta":"martes","es_correcta":0},{"respuesta":"miercoles","es_correcta":0},{"respuesta":"ninguna de las anteriores es correcta","es_correcta":0}],"pregunta":"¿Que día es hoy?","num_correctas":1,"tipo_respuesta":0},{"opciones":[{"respuesta":"Overwatch","es_correcta":1},{"respuesta":"COD","es_correcta":1},{"respuesta":"PUBG","es_correcta":1},{"respuesta":"Free Fire","es_correcta":0}],"pregunta":"¿Que juego(s) juega Erick?","num_correctas":3,"tipo_respuesta":0},{"opciones":[{"respuesta":"Alexander","es_correcta":1}],"pregunta":"¿Cual es el segundo nombre de Erick","num_correctas":1,"tipo_respuesta":1},{"opciones":[{"respuesta":"Verdadero","es_correcta":1},{"respuesta":"Falso","es_correcta":0}],"pregunta":"¿Sale el semestre?","num_correctas":1,"tipo_respuesta":2}]}`
  );

  let examen100pts = JSON.parse(
    `{"id_examen":66,"nombre_examen":"1er Parcial","id_clase":1,"num_preguntas":4,"valor_examen":15,"fecha":"2020-08-15T06:00:00.000Z","estado":1,"descripcion":"este campo es obligatorio","preguntas":[{"opciones":[{"respuesta":"lunes","es_correcta":1,"res":true},{"respuesta":"martes","es_correcta":0},{"respuesta":"miercoles","es_correcta":0},{"respuesta":"ninguna de las anteriores es correcta","es_correcta":0}],"pregunta":"¿Que día es hoy?","num_correctas":1,"tipo_respuesta":0},{"opciones":[{"respuesta":"Overwatch","es_correcta":1,"res":true},{"respuesta":"COD","es_correcta":1,"res":true},{"respuesta":"PUBG","es_correcta":1,"res":true},{"respuesta":"Free Fire","es_correcta":0}],"pregunta":"¿Que juego(s) juega Erick?","num_correctas":3,"tipo_respuesta":0},{"opciones":[{"respuesta":"Alexander","es_correcta":1}],"pregunta":"¿Cual es el segundo nombre de Erick","num_correctas":1,"tipo_respuesta":1,"res":"Alexander"},{"opciones":[{"respuesta":"Verdadero","es_correcta":1},{"respuesta":"Falso","es_correcta":0}],"pregunta":"¿Sale el semestre?","num_correctas":1,"tipo_respuesta":2,"res":"1"}]}`
  );

  let examen75pts = JSON.parse(
    `{"id_examen":66,"nombre_examen":"1er Parcial","id_clase":1,"num_preguntas":4,"valor_examen":15,"fecha":"2020-08-15T06:00:00.000Z","estado":1,"descripcion":"este campo es obligatorio","preguntas":[{"opciones":[{"respuesta":"lunes","es_correcta":1,"res":true},{"respuesta":"martes","es_correcta":0},{"respuesta":"miercoles","es_correcta":0},{"respuesta":"ninguna de las anteriores es correcta","es_correcta":0}],"pregunta":"¿Que día es hoy?","num_correctas":1,"tipo_respuesta":0},{"opciones":[{"respuesta":"Overwatch","es_correcta":1,"res":true},{"respuesta":"COD","es_correcta":1,"res":true},{"respuesta":"PUBG","es_correcta":1,"res":true},{"respuesta":"Free Fire","es_correcta":0}],"pregunta":"¿Que juego(s) juega Erick?","num_correctas":3,"tipo_respuesta":0},{"opciones":[{"respuesta":"Alexander","es_correcta":1}],"pregunta":"¿Cual es el segundo nombre de Erick","num_correctas":1,"tipo_respuesta":1,"res":"Alexander"},{"opciones":[{"respuesta":"Verdadero","es_correcta":1},{"respuesta":"Falso","es_correcta":0}],"pregunta":"¿Sale el semestre?","num_correctas":1,"tipo_respuesta":2,"res":""}]}`
  );

  let examen50pts = JSON.parse(
    `{"id_examen":66,"nombre_examen":"1er Parcial","id_clase":1,"num_preguntas":4,"valor_examen":15,"fecha":"2020-08-15T06:00:00.000Z","estado":1,"descripcion":"este campo es obligatorio","preguntas":[{"opciones":[{"respuesta":"lunes","es_correcta":1,"res":true},{"respuesta":"martes","es_correcta":0,"res":false},{"respuesta":"miercoles","es_correcta":0},{"respuesta":"ninguna de las anteriores es correcta","es_correcta":0}],"pregunta":"¿Que día es hoy?","num_correctas":1,"tipo_respuesta":0},{"opciones":[{"respuesta":"Overwatch","es_correcta":1,"res":true},{"respuesta":"COD","es_correcta":1,"res":true},{"respuesta":"PUBG","es_correcta":1,"res":true},{"respuesta":"Free Fire","es_correcta":0}],"pregunta":"¿Que juego(s) juega Erick?","num_correctas":3,"tipo_respuesta":0},{"opciones":[{"respuesta":"Alexander","es_correcta":1}],"pregunta":"¿Cual es el segundo nombre de Erick","num_correctas":1,"tipo_respuesta":1,"res":""},{"opciones":[{"respuesta":"Verdadero","es_correcta":1},{"respuesta":"Falso","es_correcta":0}],"pregunta":"¿Sale el semestre?","num_correctas":1,"tipo_respuesta":2,"res":""}]}`
  );

  let examen25pts = JSON.parse(
    `{"id_examen":66,"nombre_examen":"1er Parcial","id_clase":1,"num_preguntas":4,"valor_examen":15,"fecha":"2020-08-15T06:00:00.000Z","estado":1,"descripcion":"este campo es obligatorio","preguntas":[{"opciones":[{"respuesta":"lunes","es_correcta":1,"res":true},{"respuesta":"martes","es_correcta":0},{"respuesta":"miercoles","es_correcta":0},{"respuesta":"ninguna de las anteriores es correcta","es_correcta":0}],"pregunta":"¿Que día es hoy?","num_correctas":1,"tipo_respuesta":0},{"opciones":[{"respuesta":"Overwatch","es_correcta":1},{"respuesta":"COD","es_correcta":1},{"respuesta":"PUBG","es_correcta":1},{"respuesta":"Free Fire","es_correcta":0}],"pregunta":"¿Que juego(s) juega Erick?","num_correctas":3,"tipo_respuesta":0},{"opciones":[{"respuesta":"Alexander","es_correcta":1}],"pregunta":"¿Cual es el segundo nombre de Erick","num_correctas":1,"tipo_respuesta":1,"res":""},{"opciones":[{"respuesta":"Verdadero","es_correcta":1},{"respuesta":"Falso","es_correcta":0}],"pregunta":"¿Sale el semestre?","num_correctas":1,"tipo_respuesta":2,"res":""}]}`
  );

  let examen0pts = JSON.parse(
    `{"id_examen":66,"nombre_examen":"1er Parcial","id_clase":1,"num_preguntas":4,"valor_examen":15,"fecha":"2020-08-15T06:00:00.000Z","estado":1,"descripcion":"este campo es obligatorio","preguntas":[{"opciones":[{"respuesta":"lunes","es_correcta":1},{"respuesta":"martes","es_correcta":0},{"respuesta":"miercoles","es_correcta":0},{"respuesta":"ninguna de las anteriores es correcta","es_correcta":0}],"pregunta":"¿Que día es hoy?","num_correctas":1,"tipo_respuesta":0},{"opciones":[{"respuesta":"Overwatch","es_correcta":1},{"respuesta":"COD","es_correcta":1},{"respuesta":"PUBG","es_correcta":1},{"respuesta":"Free Fire","es_correcta":0}],"pregunta":"¿Que juego(s) juega Erick?","num_correctas":3,"tipo_respuesta":0},{"opciones":[{"respuesta":"Alexander","es_correcta":1}],"pregunta":"¿Cual es el segundo nombre de Erick","num_correctas":1,"tipo_respuesta":1,"res":""},{"opciones":[{"respuesta":"Verdadero","es_correcta":1},{"respuesta":"Falso","es_correcta":0}],"pregunta":"¿Sale el semestre?","num_correctas":1,"tipo_respuesta":2,"res":""}]}`
  );

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ResolverExamenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResolverExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
