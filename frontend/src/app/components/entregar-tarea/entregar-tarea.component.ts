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
  id_usuario:number;
  id_clase:number;
  id_tarea:number;

  constructor(private entregaService: EntregarTareaService) {
    this.getTask()
    this.id_usuario=Number(sessionStorage.getItem("id_usuario"));
    this.id_clase=Number(sessionStorage.getItem("id_clase"));
    this.id_tarea=Number(sessionStorage.getItem("id_tarea"));
  }

  ngOnInit(): void {
  }

  getTask() {
    var tarea_entregar=JSON.parse(sessionStorage.getItem("tarea"));
    this.tarea = new Tarea(tarea_entregar.id_tarea,
       tarea_entregar.nombre_tarea, tarea_entregar.descripcion, "", tarea_entregar.url_archivo_instruccion, tarea_entregar.fecha_entrega,tarea_entregar.valor_tarea)
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
    console.log("entregado");
  }

  sendTask(base: string): any {
    this.entregaService.sendTask(new EntregarTarea(this.id_usuario,this.id_clase,this.id_tarea,"",this.files[0].name,base,0)).subscribe((res: any) => {
      return res
    })
  }

}
