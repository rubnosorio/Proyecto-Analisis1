import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.scss']
})
export class CrearUsuarioComponent implements OnInit {

  userFG = new FormGroup({
    id_usuario: new FormControl('', [
      Validators.required
    ]),
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

  constructor() { }

  ngOnInit(): void {
  }

  registrar(){
    return true;
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
}
