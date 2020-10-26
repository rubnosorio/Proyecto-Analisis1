import { Component, OnInit } from '@angular/core';
import { SelectTareaService } from "../../services/select-tarea/select-tarea.service";
import { Router } from '@angular/router';
import { TareasUsuarioClase } from "../../models/tareasUsuarioClase/tareas-usuario-clase";

@Component({
  selector: 'app-select-tarea',
  templateUrl: './select-tarea.component.html',
  styleUrls: ['./select-tarea.component.scss']
})
export class SelectTareaComponent implements OnInit {

  lista_tareas: TareasUsuarioClase[] = [];
  fecha: Date = new Date();

  constructor(private selectTareaService: SelectTareaService) {
    this.selectTareaService.getTareas(1, 1).subscribe((res: any) => {
      this.lista_tareas = res.lista_tareas;
      console.log(this.lista_tareas);
    });
  }

  ngOnInit(): void {
  }

  

}
