import { Component, OnInit } from '@angular/core';
import { Tarea } from '../../models/tarea'
import { VerTareaService } from '../../services/tarea/ver-tarea.service'
import { DialogService } from '../../services/shared/dialog.service';
import {EliminarTareaService} from '../../services/eliminar-tarea.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'

@Component({
  selector: 'app-ver-tareas',
  templateUrl: './ver-tareas.component.html',
  styleUrls: ['./ver-tareas.component.scss']
})
export class VerTareasComponent implements OnInit {

  tareas: Tarea[] = []
  panelOpenState = false;
  idclase = 0;

  constructor(private toastr: ToastrService,private dialogService: DialogService, private eliminar_task:EliminarTareaService,
  public tareaService: VerTareaService,
  private router: Router) {
    //consumir el servicio para obtener las tareas
    if(!sessionStorage.getItem("id_usuario")){
      this.router.navigate(['/login']);
    }
    if(!sessionStorage.getItem("id_clase")){
      this.router.navigate(['/']);
    }
    this.idclase = Number(sessionStorage.getItem("id_clase"))
  }

  ngOnInit(): void {
    this.getTasks()
  }

  getTasks() {
    //funcion que consume el servicio para obtener todas las tareas
    this.tareaService.getTasks(this.idclase).subscribe((data_api: any) => {
      this.tareas = data_api;
    })
  }

  editTask(tarea: Tarea){
    //metodo donde se abre un componente Dialod o Bottom Sheet
    sessionStorage.setItem("tareaactual",JSON.stringify(tarea));
    this.router.navigate(['/update_tarea']);
  }

  deleteTask(tarea: Tarea){
    //metodo donde se abre un componente Dialod o Bottom Sheet
    this.dialogService.openConfirmDialog()
    .afterClosed().subscribe(res => {
      console.log(res);
      if(res){
        this.eliminar_task.delete_Tarea(tarea).subscribe(
          res => {
            console.log(res);
          },
          err => {
            console.error(err);
          }
        );
        this.toastr.success('La tarea fue eliminada con exito!','Tarea Eliminada');
      }
    })
  }



}
