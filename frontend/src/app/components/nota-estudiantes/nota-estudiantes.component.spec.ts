import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaEstudiantesComponent } from './nota-estudiantes.component';
import { NotaEstudiante } from "../../models/nota-estudiante";
import { ListaActividades } from "../../models/lista-actividades";

fdescribe('NotaEstudiantesComponent', () => {
  let component: NotaEstudiantesComponent;
  let fixture: ComponentFixture<NotaEstudiantesComponent>;
  var lista_actividades:ListaActividades[]=[];

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NotaEstudiantesComponent ]
    })
    .compileComponents();
  }));

  var nota_estudiante:NotaEstudiante=new NotaEstudiante(1,'Erick', 'Lemus',[]);
  beforeEach(() => {
    fixture = TestBed.createComponent(NotaEstudiantesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
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
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('Deberia ser estudiante creado con su lista de tareas',()=>{
    expect(nota_estudiante).toEqual(new NotaEstudiante(1,'Erick', 'Lemus',[]));
  });

  it('Deberia ser mayor o igual a 0 la lista de tareas y examenes',()=>{
    expect(component.tamListaColumnas()).toBeGreaterThanOrEqual(0);
  });

  it('Deberia ser mayor o igual a 0 la lista de estudiantes',()=>{
    expect(component.tamListaEstudiantes()).toBeGreaterThanOrEqual(0);
  });
  
  it('Deberia devolver true si la funcion fue exitosa',()=>{
    expect(component.obtenerColumnas(lista_actividades)).toBeTruthy();
  });

});
