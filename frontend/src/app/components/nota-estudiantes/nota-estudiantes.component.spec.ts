import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaEstudiantesComponent } from './nota-estudiantes.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NotaEstudiante } from "../../models/nota-estudiante";
import { ListaActividades } from "../../models/lista-actividades";
import { NotaTarea } from '../../models/nota-tarea';
import { NotaExamen } from '../../models/nota-examen';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { LoginComponent } from '../login/login.component';

describe('NotaEstudiantesComponent', () => {
  let component: NotaEstudiantesComponent;
  let fixture: ComponentFixture<NotaEstudiantesComponent>;
  var lista_actividades:ListaActividades[]=[];
  var lista_notas:NotaEstudiante[]=[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotaEstudiantesComponent ],
      imports: [
        HttpClientTestingModule,
        MatSnackBarModule,
        BrowserAnimationsModule,
        RouterTestingModule.withRoutes(
          [
            {
              path: 'login',
              component: LoginComponent
            }
          ]
        ),
      ],
    })
    .compileComponents();
  }));

  var nota_estudiante:NotaEstudiante=new NotaEstudiante(1,'Erick', 'Lemus',[],[]);
  beforeEach(() => {
    var actividad1=new ListaActividades('actividad1');
    var actividad2=new ListaActividades('actividad2');
    var actividad3=new ListaActividades('actividad3');
    var actividad4=new ListaActividades('actividad4');
    var actividad5=new ListaActividades('actividad5');
    var actividad6=new ListaActividades('actividad6');
    lista_actividades.push(actividad1);
    lista_actividades.push(actividad2);
    lista_actividades.push(actividad3);
    lista_actividades.push(actividad4);
    lista_actividades.push(actividad5);
    lista_actividades.push(actividad6);
    var estudiante1=new NotaEstudiante(1,'Erick','Lemus',[],[]);
    var estudiante2=new NotaEstudiante(2,'Carlos','Garcia',[],[]);
    var tarea1e1=new NotaTarea(1,'tarea 1',5);
    var tarea2e1=new NotaTarea(2,'tarea 2',4);
    var tarea3e1=new NotaTarea(3,'tarea 3',6);
    var tarea1e2=new NotaTarea(1,'tarea 1',5);
    var tarea2e2=new NotaTarea(2,'tarea 2',4);
    var tarea3e2=new NotaTarea(3,'tarea 3',6);
    var examen1e1=new NotaExamen(1,'primer parcial',8);
    var examen2e1=new NotaExamen(2,'segundo parcial',10);
    var examen1e2=new NotaExamen(1,'primer parcial',8);
    var examen2e2=new NotaExamen(2,'segundo parcial',10);
    estudiante1.lista_tareas.push(tarea1e1);
    estudiante1.lista_tareas.push(tarea2e1);
    estudiante1.lista_tareas.push(tarea3e1);
    estudiante2.lista_tareas.push(tarea1e2);
    estudiante2.lista_tareas.push(tarea2e2);
    estudiante2.lista_tareas.push(tarea3e2);
    estudiante1.lista_examenes.push(examen1e1);
    estudiante1.lista_examenes.push(examen2e1);
    estudiante2.lista_examenes.push(examen1e2);
    estudiante2.lista_examenes.push(examen2e2);
    lista_notas.push(estudiante1);
    lista_notas.push(estudiante2);
    fixture = TestBed.createComponent(NotaEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia ser estudiante creado con su lista de tareas',()=>{
    expect(nota_estudiante).toEqual(new NotaEstudiante(1,'Erick', 'Lemus',[],[]));
  });

  it('Deberia ser mayor o igual a 0 la lista de tareas y examenes',()=>{
    expect(component.tamListaColumnas()).toBeGreaterThanOrEqual(0);
  });

  it('Deberia ser mayor o igual a 0 la lista de estudiantes',()=>{
    expect(component.tamListaEstudiantes()).toBeGreaterThanOrEqual(0);
  });
  
  it('Deberia devolver true si la funcion fue exitosa',()=>{
    console.log(lista_notas);
    expect(component.obtenerColumnas(lista_actividades)).toBeTruthy();
  });

});
