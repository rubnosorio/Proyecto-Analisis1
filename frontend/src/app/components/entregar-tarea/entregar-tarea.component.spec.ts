import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EntregarTareaComponent } from './entregar-tarea.component';
import { Tarea } from 'src/app/models/tarea';

describe('EntregarTareaComponent', () => {
  let component: EntregarTareaComponent;
  let fixture: ComponentFixture<EntregarTareaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EntregarTareaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EntregarTareaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("obtenienodo las tareas", () => {
    component.getTask()
    var array = component.tarea
    expect(array).toEqual(new Tarea(1, "Tarea de Prueba", "Esta es una prueba y aca ira la descripcion de la tarea", "", "asdasd/asdad", "25/08/2020 18:12",5))
  })
});
