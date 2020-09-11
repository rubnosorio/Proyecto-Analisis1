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
  
  constructor() { }

  ngOnInit(): void {
  }
}
