import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';

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
    private toastr: ToastrService
  ) { }

  ngOnInit(): void {
  }

  registrar(){
    if(!this.userFG.valid){
      this.toastr.error("Formulario Incorrecto.")
      return
    }
    this.toastr.success("Registro Completado.")
    console.log(this.userFG.value)
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
