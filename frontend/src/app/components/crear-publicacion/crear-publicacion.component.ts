import { Component, OnInit } from '@angular/core';
import { CrearPublicacionService } from '../../services/crear_publicacion/crear-publicacion.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-publicacion',
  templateUrl: './crear-publicacion.component.html',
  styleUrls: ['./crear-publicacion.component.scss']
})
export class CrearPublicacionComponent implements OnInit {

  constructor(private toastr: ToastrService, private ps: CrearPublicacionService, private fb: FormBuilder, private router: Router) {
    this.createForm();
  }

  postForm: FormGroup;

  ngOnInit(): void {

    if (sessionStorage.getItem('tipo_usuario') == 'estudiante') {
      this.toastr.error('No tienes permitido entrar a esta pagina');
      this.router.navigate(['ver_clases_estudiante']);
    }
  }

  async onSubmit() {
    var postt = this.postForm.controls['publicacion'].value;
    await this.crearpublicacion(postt);
    this.postForm.reset();
  }

  crearpublicacion(publicacion) {
    return new Promise((resolve, reject) => {
      if (this.minlenght(publicacion.length) && this.maxlenght(publicacion.length)) {
        this.ps.crear_publicacion({
          "publicacion": publicacion,
          "id_clase": Number(sessionStorage.getItem('id_clase')),
          "id_usuario": Number(sessionStorage.getItem('id_usuario'))
        }).subscribe((data) => {
          if (data.res == 1) {
            this.toastr.success("Se creo correctamente la publicacion");
            resolve(true);
          }
          else if (data.res == 2) {
            this.toastr.error("No se pudo crear la publicacion");
            resolve(false);
          }
        });
      }
      else {
        this.toastr.error("Hay errores en la publicacion");
        resolve(false);
      }
    });
  }

  minlenght(lenght: number): boolean {
    if (lenght < 5) {
      return false;
    }
    return true;
  }

  maxlenght(lenght: number): boolean {
    if (lenght > 255) {
      return false;
    }
    return true;
  }

  createForm(): void {
    this.postForm = this.fb.group({
      publicacion: [
        '',
        [
          Validators.required,
          Validators.minLength(5),
          Validators.maxLength(100),
        ],
      ]
    });
  }

}
