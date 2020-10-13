import { Component, OnInit } from '@angular/core';
import { ListaActividades } from "../../models/lista-actividades";
import { Router } from '@angular/router';
import { NotaEstudiante } from "../../models/nota-estudiante";
import { NotaTarea } from "../../models/nota-tarea";
import { NotaExamen } from "../../models/nota-examen";
import { NotasEstudiantesService } from "../../services/notas_estudiantes/notas-estudiantes.service";
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';

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
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private notaEstudiantesService:NotasEstudiantesService,private _snackBar: MatSnackBar,private router: Router) { 
    //consumir el servicio para obtener las tareas
    if (!sessionStorage.getItem("id_usuario")) {
      this.openSnackBar("No ha iniciado sesión", "Cerrar");
      this.router.navigate(['/login']);
    }
    else if (sessionStorage.getItem("tipo_usuario") == "estudiante") {
      this.openSnackBar("Su sesión no es de tipo Profesor", "Cerrar");
      this.router.navigate(['/login']);
    }
    else {
      //agregar redireccion a la vista anterior
      var id_clase=Number(sessionStorage.getItem('id_clase'));
      this.notaEstudiantesService.getNotasEstudiantes(id_clase).subscribe((res:any)=>{
        this.lista_notas=res.lista_notas;
        this.obtenerColumnas(this.columnas(this.lista_notas));
        this.obtenerInfoTabla(this.lista_notas);
        console.log(this.columnas(this.lista_notas));
      });
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  columnas(lnotas:NotaEstudiante[]){
    var la:string[]=[];
    for(let i=0;i<lnotas.length;i++){
      for(let j=0;j<lnotas[i].lista_tareas.length;j++){
        var bo=false;
        for(let k=0;k<la.length;k++){
          if(la[k]==lnotas[i].lista_tareas[j].tarea){
            bo=true;
            break;
          }
        }
        if(bo==false){
          la.push(lnotas[i].lista_tareas[j].tarea);
        }
      }
      for(let j=0;j<lnotas[i].lista_examenes.length;j++){
        var bo=false;
        for(let k=0;k<la.length;k++){
          if(la[k]==lnotas[i].lista_examenes[j].examen){
            bo=true;
            break;
          }
        }
        if(bo==false){
          la.push(lnotas[i].lista_examenes[j].examen);
        }
      }
    }
    var lcol:ListaActividades[]=[];
    for(let i=0;i<la.length;i++){
      var newlc:ListaActividades=new ListaActividades(la[i]);
      lcol.push(newlc)
    }
    return lcol;
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
    console.log(listaNotas);
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
