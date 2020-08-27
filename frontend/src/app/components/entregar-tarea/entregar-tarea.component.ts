import { Component, OnInit } from '@angular/core';
import { Tarea } from '../../models/tarea'

@Component({
  selector: 'app-entregar-tarea',
  templateUrl: './entregar-tarea.component.html',
  styleUrls: ['./entregar-tarea.component.scss']
})
export class EntregarTareaComponent implements OnInit {

  tarea: Tarea
  files: File[] = [];

  constructor() {
    this.getTask()
  }

  ngOnInit(): void {
  }

  getTask() {
    this.tarea = new Tarea(1, "Tarea de Prueba", "Esta es una prueba y aca ira la descripcion de la tarea", "", "asdasd/asdad", "25/08/2020 18:12")
  }

  onSelect(event) {
    console.log(event);
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    console.log(event);
    this.files.splice(this.files.indexOf(event), 1);
  }

  sendTask() {
    var r = new FileReader()
    var f = r.readAsDataURL(this.files[0])
    r.onload = function l(){
      console.log(r.result)
    }.bind(this);
  }

}
