import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CrearPreguntaComponent } from '../crear-pregunta/crear-pregunta.component';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { CrearExamenService } from '../../services/crear_examen/crear-examen.service';
import { Router } from '@angular/router'
import { MatSnackBar } from '@angular/material/snack-bar';
import { NavbarComponent } from "../navbar/navbar.component";

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
  idclase = 0;

  constructor(
    private fb: FormBuilder,
    public dialog: MatDialog,
    private crearexamenservice: CrearExamenService,
    private _snackBar: MatSnackBar,
    private menu:NavbarComponent,
    private router: Router
  ) {
    if (!sessionStorage.getItem("id_usuario")) {
      this.menu.openSnackBar("No ha iniciado sesión", "Cerrar");
      this.router.navigate(['/login']);
    }
    else if (sessionStorage.getItem("tipo_usuario") == "estudiante") {
      this.menu.openSnackBar("Su sesión no es de tipo Profesor", "Cerrar");
      this.router.navigate(['/login']);
    }
    else {
      //agregar redireccion a la vista anterior
      this.idclase = Number(sessionStorage.getItem("id_clase"))
      this.createForm();
    }
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
    this.examen.id_clase = this.idclase;
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

    this.crearexamenservice.crear_examen(this.examen).subscribe((res) => {
      if (res.statusCode == 200) {
        this._snackBar.open('Examen creado Correctamente', '', {
          duration: 5000,
        });
        this.clean();
      } else {
        this._snackBar.open(
          `Error ${res.statusCode} al procesar la solicitud`,
          '',
          {
            duration: 5000,
          }
        );
        this.clean();
      }
    });
  }

  clean(): void {
    this.examForm.reset();
  }

  createForm(): void {
    this.examForm = this.fb.group({
      exam_name: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(255),
        ],
      ],
      exam_date: ['', [Validators.required]],
      exam_description: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(255),
        ],
      ],
      exam_grade: ['', [Validators.required]],
    });
  }
}
