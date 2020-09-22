import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearExamenComponent } from './crear-examen.component';

import { FormBuilder } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';

import { CrearPreguntaComponent } from '../crear-pregunta/crear-pregunta.component';
import { MatDialogModule } from '@angular/material/dialog';

import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';

describe('CrearExamenComponent', () => {
  let component: CrearExamenComponent;
  let fixture: ComponentFixture<CrearExamenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CrearExamenComponent, CrearPreguntaComponent],
      providers: [FormBuilder, MatDialog],
      imports: [
        MatDialogModule,
        MatCardModule,
        MatIconModule,
        MatDatepickerModule,
        MatNativeDateModule,
        ReactiveFormsModule,
      ],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CrearExamenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('Crear Componente', () => {
    expect(component).toBeTruthy();
  });

  it('El formulario deberia ser invalido', () => {
    let exam_name = component.examForm.controls['exam_name'];
    let exam_description = component.examForm.controls['exam_description'];
    let exam_grade = component.examForm.controls['exam_grade'];
    let exam_date = component.examForm.controls['exam_date'];

    exam_name.setValue('a'.repeat(256));
    exam_description.setValue('a'.repeat(256));
    exam_grade.setValue(150);
    exam_date.setValue(new Date().setFullYear(new Date().getFullYear() - 1));

    exam_name.markAsDirty();
    exam_description.markAsDirty();
    exam_grade.markAsDirty();
    exam_date.markAsDirty();

    expect(component.examForm.invalid).toBeTruthy();
  });

  it('El formulario deberia ser valido', () => {
    let exam_name = component.examForm.controls['exam_name'];
    let exam_description = component.examForm.controls['exam_description'];
    let exam_grade = component.examForm.controls['exam_grade'];
    let exam_date = component.examForm.controls['exam_date'];

    exam_name.setValue('a'.repeat(6));
    exam_description.setValue('a'.repeat(6));
    exam_grade.setValue(5);
    exam_date.setValue(new Date());

    exam_name.markAsDirty();
    exam_description.markAsDirty();
    exam_grade.markAsDirty();
    exam_date.markAsDirty();

    expect(component.examForm.valid).toBeTruthy();
  });
});
