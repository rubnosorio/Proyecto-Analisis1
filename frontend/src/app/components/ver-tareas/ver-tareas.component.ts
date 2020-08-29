import { Component, OnInit } from '@angular/core';
import { Tarea } from '../../models/tarea'
import { VerTareaService } from '../../services/tarea/ver-tarea.service'

@Component({
  selector: 'app-ver-tareas',
  templateUrl: './ver-tareas.component.html',
  styleUrls: ['./ver-tareas.component.scss']
})
export class VerTareasComponent implements OnInit {

  tareas: Tarea[]
  panelOpenState = false;

  constructor(private tareaService: VerTareaService) {
    //consumir el servicio para obtener las tareas
    this.getTasks()
  }

  ngOnInit(): void {
  }

  getTasks() {
    //funcion que consume el servicio para obtener todas las tareas
    this.tareaService.getTasks(1).subscribe((data_api: any) => {
      this.tareas = data_api;
    })
    /*this.tareas = [
      new Tarea(0,"Titulo de prueba para Tarea 0","Descripcion de prueba para las instrucciones de una tarea 0","","asdasd","24/08/2020 11:15"),
      new Tarea(1,"Titulo de prueba para Tarea 1","Descripcion de prueba para las instrucciones de una tarea 1","","","24/08/2020 11:15"),
      new Tarea(2,"Titulo de prueba para Tarea 2","Descripcion de prueba para las instrucciones de una tarea 2","","","24/08/2020 11:15"),
      new Tarea(3,"Titulo de prueba para Tarea 3","Descripcion de prueba para las instrucciones de una tarea 3","","","24/08/2020 11:15"),
      new Tarea(4,"Titulo de prueba para Tarea 4","Descripcion de prueba para las instrucciones de una tarea 4","","","24/08/2020 11:15"),
      new Tarea(5,"Titulo de prueba para Tarea 5","Descripcion de prueba para las instrucciones de una tarea 5","","","24/08/2020 11:15"),
      new Tarea(6,"Titulo de prueba para Tarea 6","Descripcion de prueba para las instrucciones de una tarea 6","","","24/08/2020 11:15"),
      new Tarea(7,"Titulo de prueba para Tarea 7","Descripcion de prueba para las instrucciones de una tarea 7","","","24/08/2020 11:15"),
      new Tarea(8,"Titulo de prueba para Tarea 8","Descripcion de prueba para las instrucciones de una tarea 8","","","24/08/2020 11:15"),
      new Tarea(9,"Titulo de prueba para Tarea 9","Descripcion de prueba para las instrucciones de una tarea 9","","","24/08/2020 11:15"),
      new Tarea(10,"Titulo de prueba para Tarea 10","Descripcion de prueba para las instrucciones de una tarea 10","","","24/08/2020 11:15"),
    ]*/
  }

  editTask(tarea: Tarea){
    //metodo donde se abre un componente Dialod o Bottom Sheet
    console.log("editar tarea")
    console.log(tarea)
  }

  deleteTask(tarea: Tarea){
    //metodo donde se abre un componente Dialod o Bottom Sheet
    console.log("eliminar tarea")
    console.log(tarea)
  }

}
