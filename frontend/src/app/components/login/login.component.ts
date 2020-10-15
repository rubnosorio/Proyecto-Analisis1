import { Component, OnInit, resolveForwardRef } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { LoginserviceService } from '../../services/login/loginservice.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NavbarComponent } from "../navbar/navbar.component";
import { ConstantPool } from '@angular/compiler';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  formErrors = {
    username: '',
    password: '',
  };

  validationMessages = {
    username: {
      required: 'Se requiere un nombre de usuario',
      minlength: 'El nombre de usuario debe tener como minimo 2 caracteres',
      maxlength: 'El nombre de usuario no debe tener mas de 25 caracteres',
    },
    password: {
      required: 'Se requiere de un password',
      minlength: 'El password debe tener como minimo 2 caracteres',
      maxlength: 'El password no debe tener mas de 25 caracteres',
    },
  };


  //agregamos el menu que queremos ir modificando
  constructor(
    private fb: FormBuilder,
    private ls: LoginserviceService,
    private _snackBar: MatSnackBar,
    public menu: NavbarComponent,
    private router: Router
  ) {
    this.createForm();
    //obtenemos el menu que queremos ir modificando
    //this.menu.fillerNav = JSON.parse(sessionStorage.getItem('menuPrincipal'));
  }

  ngOnInit(): void { }

  createForm() {
    this.loginForm = this.fb.group({
      username: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(25),
        ],
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(2),
          Validators.maxLength(25),
        ],
      ],
      escatedratico: [
        false,
        []
      ]
    });
    this.loginForm.valueChanges.subscribe((data) => {
      this.onValueChanged(data);
    });
    this.onValueChanged();
  }

  onValueChanged(data?) {
    if (!this.loginForm) {
      return;
    }
    const form = this.loginForm;
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

  loginpromise() {
    return new Promise((resolve, reject) => {
      this.ls.login(this.loginForm.value).subscribe(async (res) => {
        if (res.statusCode == 200) {
          sessionStorage.setItem('id_usuario', res.usuario.id_usuario)
          var tipo = 0;
          if (this.loginForm.value.escatedratico) {
            sessionStorage.setItem('tipo_usuario', 'catedratico')
            tipo = 1;
          }
          else {
            sessionStorage.setItem('tipo_usuario', 'estudiante')
            tipo = 2;
          }
          resolve({ res: true, res2: tipo });
        } else {
          resolve({ res: tipo, res2: tipo });
        }
      })
    });
  }

  async onSubmit() {
    var ress;
    await this.loginpromise().then((res:any) => {
      if (res.res) {
        this._snackBar.open('Credenciales Correctas', '', {
          duration: 5000,
        });
        this.loginForm.reset();
        if(res.res2==1)
        {
          this.router.navigate(['Cursos_Profesor']);
        }
        else
        {
          this.modificarMenu();
          this.irInicioUsuario();
        }
        //this.modificarMenu();
        //this.irInicioUsuario();
        ress = true;
      }
      else {
        this._snackBar.open(`Credenciales Incorrectas`, '', {
          duration: 5000,
        });
        this.loginForm.reset();
        ress = false;
      }
    });
    return ress;
  }

  //se agregó el una función para modificar el menú
  modificarMenu() {
    this.menu.fillerNav.length = 0;
    this.menu.fillerNav = [
      { name: "home", route: "demo", icon: "home" },
      { name: "Crear Tarea", route: "creartarea", icon: "add_box" },
      { name: "Ver Tareas (profesor)", route: "ver-tareas", icon: "class" },
      { name: "Actualizar Tareas (profesor)", route: "update_tarea", icon: "update" },
      { name: "Crear Examen(profesor)", route: "crear_examen", icon: "create" },
      { name: "Ver Examen(profesor)", route: "ver-examenes", icon: "pageview" },
      { name: "Actualizar Examen(profesor)", route: "update_examen", icon: "sync_alt" },
      { name: "Entregar tarea(estudiante)", route: "entregar-tarea", icon: "attachment" },
      { name: "Cerrar Sesion", route: "", icon: "exit_to_app" }
    ];
    sessionStorage.removeItem("menuPrincipal");
    sessionStorage.setItem("menuPrincipal", JSON.stringify(this.menu.fillerNav));
  }

  //agremos la ruta nueva a la que se movera
  irInicioUsuario() {
    this.router.navigate(['demo']);
  }

  ngOnSignIn(): void {

  }
}
