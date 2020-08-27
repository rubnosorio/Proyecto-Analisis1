import { Component, OnInit } from '@angular/core';

import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-tarea',
  templateUrl: './crear-tarea.component.html',
  styleUrls: ['./crear-tarea.component.scss'],
})
export class CrearTareaComponent implements OnInit {
  minDate: Date;

  homeworkForm: FormGroup;

  formErrors = {
    nombre_tarea: '',
    descripcion: '',
    fecha_entrega: '',
  };

  validationMessages = {
    nombre_tarea: {
      required: 'Se requiere un nombre para la tarea',
      minlength: 'El nombre de la tarea debe tener como minimo 5 caracteres',
      maxlength: 'El nombre de la tarea no debe tener mas de 100 caracteres',
    },
    descripcion: {
      required: 'Se requiere de una descripcion',
      minlength: 'La descripcion debe tener como minimo 5 caracteres',
      maxlength: 'La descripcion no debe tener mas de 2000 caracteres',
    },
    fecha_entrega: {
      required: 'Se requiere de una fecha de entrega',
      matDatepickerMin: 'La fecha no puede ser previa a hoy',
    },
  };

  constructor(private fb: FormBuilder) {
    this.createForm();
  }

  ngOnInit(): void {
    this.minDate = new Date();
  }

  clean(): void {
    this.homeworkForm.reset();
  }

  createForm(): void {
    this.homeworkForm = this.fb.group({
      nombre_tarea: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
        ],
      ],
      descripcion: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(2000),
        ],
      ],
      archivo: ['', []],
      fecha_entrega: ['', [Validators.required]],
    });
    this.homeworkForm.valueChanges.subscribe((data) => {
      this.onValueChanged(data);
    });
    this.onValueChanged();
  }

  onValueChanged(data?): void {
    if (!this.homeworkForm) {
      return;
    }
    const form = this.homeworkForm;
    for (const field in this.formErrors) {
      if (this.formErrors.hasOwnProperty(field)) {
        this.formErrors[field] = '';
        const control = form.get(field);
        if (control && control.dirty && !control.valid) {
          const messages = this.validationMessages[field];
          for (const key in control.errors) {
            if (control.errors.hasOwnProperty(key)) {
              this.formErrors[field] += messages[key] + ' ';
            }
          }
        }
      }
    }
  }

  onSubmit(): void {
    console.log(this.homeworkForm.value);
  }
}
