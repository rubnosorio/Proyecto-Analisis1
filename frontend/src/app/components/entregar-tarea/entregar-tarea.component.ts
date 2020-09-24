import { Component, OnInit } from '@angular/core';
import { Tarea } from '../../models/tarea'
import { EntregarTareaService } from '../../services/tarea/entregar-tarea.service'
import { EntregarTarea } from 'src/app/models/entregar-tarea';

@Component({
  selector: 'app-entregar-tarea',
  templateUrl: './entregar-tarea.component.html',
  styleUrls: ['./entregar-tarea.component.scss']
})
export class EntregarTareaComponent implements OnInit {

  tarea: Tarea
  files: any[] = [];

  constructor(private entregaService: EntregarTareaService) {
    this.getTask()
  }

  ngOnInit(): void {
  }

  getTask() {
    this.tarea = new Tarea(1, "Tarea de Prueba", "Esta es una prueba y aca ira la descripcion de la tarea", "", "asdasd/asdad", "25/08/2020 18:12",10)
  }

  onSelect(event) {
    this.files.push(...event.addedFiles);
  }

  onRemove(event) {
    this.files.splice(this.files.indexOf(event), 1);
  }

  getFile() {
    var r = new FileReader()
    if(this.files.length < 1) {
      console.log("falta que se agregue un archivo")
      return
    }
    var f = r.readAsDataURL(this.files[0])
    r.onload = function l(){
      this.sendTask(r.result)
    }.bind(this);
  }

  sendTask(base: string): any {
    this.entregaService.sendTask(new EntregarTarea(1,1,12,"",this.files[0].name,base,0)).subscribe((res: any) => {
      return res
    })
  }

}
