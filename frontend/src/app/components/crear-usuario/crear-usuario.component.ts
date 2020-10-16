import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { CrearUsuarioService } from '../../services/crear-usuario/crear-usuario.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss']
})
export class CrearUsuarioComponent implements OnInit {

  userFG = new FormGroup({
    nombres: new FormControl('', [
      Validators.required
    ]),
    apellidos: new FormControl('', [
      Validators.required
    ]),
    username: new FormControl('', [
      Validators.required
    ]),
    passwd: new FormControl('', [
      Validators.required
    ]),
    correo: new FormControl('', [
      Validators.required,
      Validators.email
    ]),
  });

  constructor(
    private toastr: ToastrService,
    private crearU: CrearUsuarioService,
    private router: Router
  ) { }

  ngOnInit(): void {
  }

  registrar() : any {
    this.toastr.success("Registro Completado.")
    return true;
  }

  registrarAPI() {
    if (!this.userFG.valid) {
      this.toastr.error("Formulario Incorrecto.")
      return
    }
    this.crearU.postUser(this.userFG.value).subscribe(res => {
      this.toastr.success("Registro Completado.")
      this.irInicioUsuario();
    }, err => {
      this.toastr.error("No se pudo registrar al usuario.")
    })
    this.userFG.reset();
  }

  get nombresFC() {
    return this.userFG.get('nombres');
  }
  get apellidosFC() {
    return this.userFG.get('apellidos');
  }
  get usernameFC() {
    return this.userFG.get('username');
  }
  get passwdFC() {
    return this.userFG.get('passwd');
  }
  get correoFC() {
    return this.userFG.get('correo');
  }

  irInicioUsuario() {
    this.router.navigate(['login']);
  }
}
