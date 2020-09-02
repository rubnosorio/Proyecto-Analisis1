import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-crear-pregunta',
  templateUrl: './crear-pregunta.component.html',
  styleUrls: ['./crear-pregunta.component.scss'],
})
export class CrearPreguntaComponent implements OnInit {
  typees: any = [
    { value: 0, viewValue: 'Opcion multiple' },
    { value: 1, viewValue: 'Respuesta escrita' },
    { value: 2, viewValue: 'Verdadero y falso' },
  ];

  respuestas = [];

  tra(res) {
    if (res == 1) {
      return 'Verdadero';
    }
    return 'Falso';
  }

  questionForm: FormGroup;
  answerForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<CrearPreguntaComponent>
  ) {
    this.createForm();
  }

  crearrespuesta() {
    this.respuestas.push(this.answerForm.value);
  }

  ngOnInit(): void {}

  createForm(): void {
    this.questionForm = this.fb.group({
      question_desc: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(25),
        ],
      ],
      question_type: ['', [Validators.required]],
    });
    this.answerForm = this.fb.group({
      answer_desc: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(255),
        ],
      ],
      answer_res: ['', [Validators.required]],
    });
  }

  agregarrespuesta() {
    let res: any = {};
    res.pregunta = this.questionForm.controls['question_desc'].value;
    res.tipo_respuesta = this.questionForm.controls['question_type'].value;
    res.opciones = [];

    switch (this.questionForm.controls['question_type'].value) {
      case 0:
        let cont = 0;
        for (let i = 0; i < this.respuestas.length; i++) {
          res.opciones.push({
            respuesta: this.respuestas[i].answer_desc,
            es_correcto: Number(this.respuestas[i].answer_res),
          });
          if (this.respuestas[i].answer_res == 1) {
            cont++;
          }
          res.num_correctas = cont;
        }
        break;
      case 1:
        res.num_correctas = 1;
        res.opciones.push({
          respuesta: this.answerForm.controls['answer_desc'].value,
          es_correcto: 1,
        });
        break;
      case 2:
        res.num_correctas = 1;
        if (this.answerForm.controls['answer_res'].value == 1) {
          res.opciones.push({ respuesta: 'Verdadero', es_correcto: 1 });
          res.opciones.push({ respuesta: 'Falso', es_correcto: 0 });
        } else {
          res.opciones.push({ respuesta: 'Verdadero', es_correcto: 0 });
          res.opciones.push({ respuesta: 'Falso', es_correcto: 1 });
        }
        break;
    }
    this.dialogRef.close(res);
  }
}
