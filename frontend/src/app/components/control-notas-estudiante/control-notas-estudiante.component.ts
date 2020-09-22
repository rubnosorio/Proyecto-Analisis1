import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { Tarea } from '../../models/tarea';
import { Examen } from '../../models/examen'; 
import { ControlNotasEstudianteService } from '../../services/control-notas-estudiante/control-notas-estudiante.service';

@Component({
  selector: 'app-control-notas-estudiante',
  templateUrl: './control-notas-estudiante.component.html',
  styleUrls: ['./control-notas-estudiante.component.scss']
})
export class ControlNotasEstudianteComponent implements OnInit {

  estudiante: Usuario = new Usuario(1,'mario alejando','gonzales perez','mario123','1234','mario123@gmail.com');
  t1: Tarea = new Tarea(1,'tarea 1','descripcion tarea 1',' ',' ','2020-08-03',0);
  t2: Tarea = new Tarea(2,'tarea 2','descripcion tarea 2',' ',' ','2020-08-05',0);
  t3: Tarea = new Tarea(3,'tarea 3','descripcion tarea 3',' ',' ','2020-08-12',0);
  t4: Tarea = new Tarea(4,'tarea 4','descripcion tarea 4',' ',' ','2020-08-17',0);
  t5: Tarea = new Tarea(5,'tarea 5','descripcion tarea 5',' ',' ','2020-08-28',0);
  tareas: Tarea[]=[this.t1,this.t2,this.t3,this.t4,this.t5];
  e1: Examen = new Examen(1,'examen 1','2020-08-01','descripcion examen 1',0,5,0,1,[]);
  e2: Examen = new Examen(2,'examen 2','2020-08-10','descripcion examen 2',0,7,0,1,[]);
  e3: Examen = new Examen(3,'examen 3','2020-08-15','descripcion examen 3',0,3,0,1,[]);
  e4: Examen = new Examen(4,'examen 4','2020-08-20','descripcion examen 4',0,10,0,1,[]);
  e5: Examen = new Examen(5,'examen 5','2020-09-01','descripcion examen 5',0,5,0,1,[]);
  examenes: Examen[]=[this.e1,this.e2,this.e3,this.e4,this.e5];
  displayedColumns: string[] = ['no', 'nombre', 'fecha', 'nota'];

  constructor(private controlnotas: ControlNotasEstudianteService) { }

  ngOnInit(): void {
  }

  obtenerEstudiante(){
    return this.estudiante;
  }

  CantidadValida(tamanio:number){
    if(tamanio >= 0){
      return true;
    }
    return false;
  }

  NotaValida(nota:number){
    if(nota >= 0 && nota <=100){
      return true;
    }else{
      return false;
    }
  }

}
