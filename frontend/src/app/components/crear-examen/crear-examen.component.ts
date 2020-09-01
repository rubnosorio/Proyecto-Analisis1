import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CrearPreguntaComponent } from '../crear-pregunta/crear-pregunta.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-examen',
  templateUrl: './crear-examen.component.html',
  styleUrls: ['./crear-examen.component.scss'],
})
export class CrearExamenComponent implements OnInit {
  minDate: Date;
  examForm: FormGroup;

  preguntas: any[] = [];

  examen: any = {};

  constructor(private fb: FormBuilder, public dialog: MatDialog) {
    this.createForm();
  }

  ngOnInit(): void {
    this.minDate = new Date();
  }

  crearpregunta() {
    const dialogRef = this.dialog.open(CrearPreguntaComponent, {});
    dialogRef.afterClosed().subscribe((result) => {
      if (result != undefined) {
        this.preguntas.push(result);
      }
    });
  }

  onSubmit() {
    let fecha = this.examForm.controls['exam_date'].value;

    this.examen.nombre_examen = this.examForm.controls['exam_name'].value;
    this.examen.id_clase = 1;
    this.examen.num_preguntas = this.preguntas.length;
    this.examen.valor_examen = Number(
      this.examForm.controls['exam_grade'].value
    );
    this.examen.fecha =
      fecha.getDate() +
      '/' +
      (fecha.getMonth() + 1) +
      '/' +
      fecha.getFullYear();
    this.examen.estado = 0;
    this.examen.descripcion = this.examForm.controls['exam_description'].value;
    this.examen.preguntas = this.preguntas;

    console.log(JSON.stringify(this.examen));
  }

  clean() {}

  createForm(): void {
    this.examForm = this.fb.group({
      exam_name: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(25)]],
      exam_date: ['', [Validators.required]],
      exam_description: ['', [Validators.required], Validators.minLength(5), Validators.maxLength(255)],
      exam_grade: ['', [Validators.required]],
    });
  }
}
