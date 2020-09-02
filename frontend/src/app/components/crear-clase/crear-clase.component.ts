import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-crear-clase',
  templateUrl: './crear-clase.component.html',
  styleUrls: ['./crear-clase.component.scss']
})
export class CrearClaseComponent implements OnInit {

   RespDia={
    resp:false,
    Clase:''
  }

  constructor(public dialogRef: MatDialogRef<CrearClaseComponent>,
    private fb: FormBuilder) { }

  ngOnInit(): void {

  }

  OnResT(ll) {
    this.RespDia.resp=true;
    this.RespDia.Clase=ll;
    return (this.RespDia);
  }


}
