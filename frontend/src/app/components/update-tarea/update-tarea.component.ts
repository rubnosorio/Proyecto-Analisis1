import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-tarea',
  templateUrl: './update-tarea.component.html',
  styleUrls: ['./update-tarea.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class UpdateTareaComponent implements OnInit {

  idtarea: number;
  titulo: string;
  descripcion: string;
  fecha_entrega: string;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.idtarea=0;
    this.titulo='Tarea N';
    this.descripcion='Instrucciones Tarea N\n 1) Instruccion 1\n 2) Instruccion 2\n 3) Instruccion 3\n';
    this.fecha_entrega='2020-08-30T23:59';
  }

  actualizar(){
    if(this.titulo.length != 0 && this.descripcion.length != 0 && this.fecha_entrega.length != 0){
      console.log('Titulo: '+this.titulo);
      console.log('Descripción: '+this.descripcion);
      console.log('Fecha Entrega: '+this.fecha_entrega);
    }else{
      console.log('No se puede actualizar tarea si esta vacia.');
    }
  }

  cancelacion(){
    this.router.navigate(['/']);
  }

}
