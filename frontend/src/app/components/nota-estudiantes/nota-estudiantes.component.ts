import { Component, OnInit } from '@angular/core';
import { ListaActividades } from "../../models/lista-actividades";
import { Router } from '@angular/router';
import { NotaEstudiante } from "../../models/nota-estudiante";
import { NotaTarea } from "../../models/nota-tarea";
import { NotaExamen } from "../../models/nota-examen";

@Component({
  selector: 'app-nota-estudiantes',
  templateUrl: './nota-estudiantes.component.html',
  styleUrls: ['./nota-estudiantes.component.scss']
})
export class NotaEstudiantesComponent implements OnInit {

  lista_columnas: string[]=[]
  lista_estudiantes:string[]=[];
  lista_notas:NotaEstudiante[]=[];
  alguito:any[]=[];

  constructor() { 
    var actividad1=new ListaActividades('tarea 1');
    var actividad2=new ListaActividades('tarea 2');
    var actividad3=new ListaActividades('tarea 3');
    var actividad4=new ListaActividades('primer parcial');
    var actividad5=new ListaActividades('segundo parcial');
    var lista_actividades:ListaActividades[]=[];
    lista_actividades.push(actividad1);
    lista_actividades.push(actividad2);
    lista_actividades.push(actividad3);
    lista_actividades.push(actividad4);
    lista_actividades.push(actividad5);
    this.obtenerColumnas(lista_actividades);
    var estudiante1=new NotaEstudiante(1,'Erick','Lemus',[],[]);
    var estudiante2=new NotaEstudiante(2,'Carlos','Garcia',[],[]);
    var tarea1e1=new NotaTarea(1,'tarea 1',5);
    var tarea2e1=new NotaTarea(2,'tarea 2',4);
    var tarea3e1=new NotaTarea(3,'tarea 3',6);
    var tarea1e2=new NotaTarea(1,'tarea 1',3);
    var tarea2e2=new NotaTarea(2,'tarea 2',7);
    var tarea3e2=new NotaTarea(3,'tarea 3',5);
    var examen1e1=new NotaExamen(1,'primer parcial',8);
    var examen2e1=new NotaExamen(2,'segundo parcial',10);
    var examen1e2=new NotaExamen(1,'primer parcial',8);
    var examen2e2=new NotaExamen(2,'segundo parcial',10);
    estudiante1.lista_tareas.push(tarea1e1);
    estudiante1.lista_tareas.push(tarea2e1);
    estudiante1.lista_tareas.push(tarea3e1);
    estudiante2.lista_tareas.push(tarea1e2);
    estudiante2.lista_tareas.push(tarea2e2);
    estudiante2.lista_tareas.push(tarea3e2);
    estudiante1.lista_examenes.push(examen1e1);
    estudiante1.lista_examenes.push(examen2e1);
    estudiante2.lista_examenes.push(examen1e2);
    estudiante2.lista_examenes.push(examen2e2);
    this.lista_notas.push(estudiante1);
    this.lista_notas.push(estudiante2);
    console.log(this.lista_notas);
    /*var algo={
      lista:['1','2','3','4','5','6','7']
    };
    var alg2={
      lista:['12','22','32','42','52','62','72']
    };
    this.alguito.push(algo);
    this.alguito.push(alg2);*/
    this.obtenerInfoTabla(this.lista_notas);
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

  obtenerInfoTabla(listaNotas:NotaEstudiante[]){
    for(let i=0;i<listaNotas.length;i++){
      var datos={
        lista:[]
      }
      datos.lista.push(listaNotas[i].nombres+' '+listaNotas[i].apellidos)
      for(let j=0;j<this.lista_columnas.length;j++){
        var flag=false;
        for(let k=0;k<listaNotas[i].lista_tareas.length;k++){
          if(this.lista_columnas[j]==listaNotas[i].lista_tareas[k].tarea){
            flag=true;
            datos.lista.push(listaNotas[i].lista_tareas[k].nota);
          }
        }
        if(flag==false){
          for(let k=0;k<listaNotas[i].lista_examenes.length;k++){
            if(this.lista_columnas[j]==listaNotas[i].lista_examenes[k].examen){
              flag=true;
              datos.lista.push(listaNotas[i].lista_examenes[k].nota);
            }
          }
          if(flag==false){
            datos.lista.push('--');
          }
        }
      }
      this.alguito.push(datos);
    }
  }


}
