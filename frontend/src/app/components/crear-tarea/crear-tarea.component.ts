import { Component, Inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavbarComponent } from "../navbar/navbar.component";
import { ServiceCrearTareaService } from '../../services/crear_tarea/service-crear-tarea.service';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';

@Component({
  selector: 'app-crear-tarea',
  templateUrl: './crear-tarea.component.html',
  styleUrls: ['./crear-tarea.component.scss'],
})
export class CrearTareaComponent implements OnInit {
  minDate: Date;

  homeworkForm: FormGroup;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

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

  constructor(
    public menu:NavbarComponent,
    private fb: FormBuilder,
    private creartareaservice: ServiceCrearTareaService,
    private _snackBar: MatSnackBar,
    private router:Router
  ) {
    if (!sessionStorage.getItem("id_usuario")) {
      this.openSnackBar("No ha iniciado sesión", "Cerrar");
      this.router.navigate(['/login']);
    }
    else if (sessionStorage.getItem("tipo_usuario") == "estudiante") {
      this.openSnackBar("Su sesión no es de tipo Profesor", "Cerrar");
      this.router.navigate(['/login']);
    }
    else {
      sessionStorage.setItem("id_clase","1");
      //agregar redireccion a la vista anterior
      this.createForm();
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  ngOnInit(): void {
    this.minDate = new Date();
  }

  clean(): void {
    this.homeworkForm.reset();
    this.homeworkForm.controls['archivo'].setValue('');
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
      valor_tarea: [0, [Validators.required,
      Validators.min(0),
      Validators.max(100)]],
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
    let fecha = this.homeworkForm.controls['fecha_entrega'].value;

    let idClase = sessionStorage.getItem("id_clase");

    this.readFilePromise().then((abase64) => {
      let envio = {
        nombre_tarea: this.homeworkForm.controls['nombre_tarea'].value,
        descripcion: this.homeworkForm.controls['descripcion'].value,
        valor_tarea: this.homeworkForm.controls['valor_tarea'].value,
        fecha_entrega:
          fecha.getDate() +
          '/' +
          (fecha.getMonth() + 1) +
          '/' +
          fecha.getFullYear(),
        archivo: abase64,
        id_clase: Number(idClase),
        nombre_clase: idClase,
      };
      this.creartareaservice.crear_tarea(envio).subscribe((res) => {
        if (res.statusCode == 200) {
          this._snackBar.open('Tarea Creada Correctamente', '', {
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
    });
  }

  readFilePromise = () => {
    return new Promise((resolve, reject) => {
      if (this.homeworkForm.controls['archivo'].value != '') {
        const reader = new FileReader();
        reader.readAsDataURL(this.homeworkForm.controls['archivo'].value);
        reader.onload = () => {
          resolve(reader.result.toString());
        };
      } else {
        resolve('');
      }
    });
  };
}
