import { Component, OnInit } from '@angular/core';
import { ListaActividades } from "../../models/lista-actividades";
import { Router } from '@angular/router';

@Component({
  selector: 'app-nota-estudiantes',
  templateUrl: './nota-estudiantes.component.html',
  styleUrls: ['./nota-estudiantes.component.scss']
})
export class NotaEstudiantesComponent implements OnInit {

  lista_columnas: string[]=[]
  lista_estudiantes:string[]=[];

  constructor(private router:Router) { 
    var actividad1=new ListaActividades('actividad1');
    var actividad2=new ListaActividades('actividad2');
    var actividad3=new ListaActividades('actividad3');
    var actividad4=new ListaActividades('actividad4');
    var actividad5=new ListaActividades('actividad5');
    var actividad6=new ListaActividades('actividad6');
    var lista_actividades:ListaActividades[]=[];
    lista_actividades.push(actividad1);
    lista_actividades.push(actividad2);
    lista_actividades.push(actividad3);
    lista_actividades.push(actividad4);
    lista_actividades.push(actividad5);
    lista_actividades.push(actividad6);
    this.obtenerColumnas(lista_actividades);
  }

  ngOnInit(): void {
  }

  tamListaColumnas(){
    return this.lista_columnas.length;
  }

  tamListaEstudiantes(){
    return this.lista_estudiantes.length;
  }

  obtenerColumnas(lista:ListaActividades[]){
    for(let i=0;i<lista.length;i++){
      this.lista_columnas.push(lista[i].actividad);
    }
    return true;
  }


}
