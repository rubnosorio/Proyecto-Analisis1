import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NotaEstudiantesComponent } from './nota-estudiantes.component';
import { NotaEstudiante } from "../../models/nota-estudiante";

fdescribe('NotaEstudiantesComponent', () => {
  let component: NotaEstudiantesComponent;
  let fixture: ComponentFixture<NotaEstudiantesComponent>;

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
    expect(component.obtenerColumnas()).toBeTruthy();
  });

});
