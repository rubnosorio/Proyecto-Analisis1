import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario';
import { Tarea } from '../../models/tarea';
import { Examen } from '../../models/examen';

@Component({
  selector: 'app-control-notas-estudiante',
  templateUrl: './control-notas-estudiante.component.html',
  styleUrls: ['./control-notas-estudiante.component.scss']
})
export class ControlNotasEstudianteComponent implements OnInit {

  estudiante: Usuario = new Usuario(1,'mario alejando','gonzales perez','mario123','1234','mario123@gmail.com');
  tareas: Tarea [];

  constructor() { }

  ngOnInit(): void {
  }

  obtenerEstudiante(){
    return this.estudiante;
  }

}
