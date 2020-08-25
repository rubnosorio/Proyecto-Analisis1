import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card'
import { MatDividerModule } from '@angular/material/divider'
import { ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

import { VerTareasComponent } from './ver-tareas.component';
import { Tarea } from 'src/app/models/tarea';

fdescribe('VerTareasComponent', () => {
  let component: VerTareasComponent;
  let fixture: ComponentFixture<VerTareasComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [
        BrowserAnimationsModule,
        MatCardModule,
        MatDividerModule,
        ReactiveFormsModule,
        MatButtonModule,
        MatExpansionModule
      ],
      declarations: [VerTareasComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(VerTareasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it("obtenienodo las tareas", () => {
    component.getTasks()
    var array = component.tareas
    expect(array.length).toBe(11)
  })

});
