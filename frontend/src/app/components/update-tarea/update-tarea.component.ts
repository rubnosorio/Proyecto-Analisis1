import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-tarea',
  templateUrl: './update-tarea.component.html',
  styleUrls: ['./update-tarea.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class UpdateTareaComponent implements OnInit {

  idtarea: number=0;
  titulo: string;
  instruccion: string;

  constructor(private router:Router) { }

  ngOnInit(): void {
    this.titulo='Tarea N';
    this.instruccion='Instrucciones Tarea N\n 1) Instruccion 1\n 2) Instruccion 2\n 3) Instruccion 3\n'
  }

  actualizar(){
    if(this.titulo.length != 0 && this.instruccion.length != 0){
      console.log(this.titulo+'\n '+this.instruccion);
    }else{
      console.log('No se puede actualizar tarea si esta vacia.');
    }
  }

  cancelacion(){
    this.router.navigate(['/']);
  }

}
