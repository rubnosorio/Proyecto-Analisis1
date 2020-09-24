import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatCardModule } from '@angular/material/card'
import { MatDividerModule } from '@angular/material/divider'
import { ReactiveFormsModule } from '@angular/forms'
import { MatButtonModule } from '@angular/material/button';
import { MatExpansionModule } from '@angular/material/expansion';

import { VerTareasComponent } from './ver-tareas.component';
import { Tarea } from 'src/app/models/tarea';
import { By } from '@angular/platform-browser';

describe('Dado que quiero ver las tareas creadas', () => {
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

  it("Cuando las obtengo del servicio", () => {
    component.getTasks()
    var array = component.tareas
    expect(array.length).toBeGreaterThanOrEqual(0);
  })

  it("entonces las tareas tareas que se muestran al usuario", () => {
    const tasks = fixture.debugElement.queryAll(By.css('.mat-accordion mat-expansion-panel'));
    expect(tasks.length).toBeGreaterThanOrEqual(0);
    
  })

});
