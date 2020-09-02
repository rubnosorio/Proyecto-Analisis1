import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-dialogo-eliminar-examen',
  templateUrl: './dialogo-eliminar-examen.component.html',
  styleUrls: ['./dialogo-eliminar-examen.component.scss']
})
export class DialogoEliminarExamenComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogoEliminarExamenComponent>,
              private fb: FormBuilder
    ) { }


  ngOnInit(): void {
  }
  OnResT(ll):string {
    return '{"respuesta":true,"Clase":"'+ll+'"}';
  }
}
