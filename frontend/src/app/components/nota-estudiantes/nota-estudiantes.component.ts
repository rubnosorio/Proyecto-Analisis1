import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nota-estudiantes',
  templateUrl: './nota-estudiantes.component.html',
  styleUrls: ['./nota-estudiantes.component.scss']
})
export class NotaEstudiantesComponent implements OnInit {

  lista_columnas: string[]=['Tarea 1', 'Tarea 2', '1er Parcial', '2do Parcial']

  constructor() { }

  ngOnInit(): void {
  }

}
