import { Component, OnInit } from '@angular/core';
import { Tarea } from '../../models/tarea'
import { VerTareaService } from '../../services/tarea/ver-tarea.service'
import { DialogService } from '../../services/shared/dialog.service';
import {EliminarTareaService} from '../../services/eliminar-tarea.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-ver-tareas',
  templateUrl: './ver-tareas.component.html',
  styleUrls: ['./ver-tareas.component.scss']
})
export class VerTareasComponent implements OnInit {

  tareas: Tarea[] = []
  panelOpenState = false;
  idclase = 0;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private toastr: ToastrService,private dialogService: DialogService, private eliminar_task:EliminarTareaService,
  public tareaService: VerTareaService, private _snackBar: MatSnackBar,
  private router: Router, private menu:NavbarComponent) {
    //consumir el servicio para obtener las tareas
    if (!sessionStorage.getItem("id_usuario")) {
      this.openSnackBar("No ha iniciado sesión", "Cerrar");
      this.router.navigate(['/login']);
    }
    else if (sessionStorage.getItem("tipo_usuario") == "estudiante") {
      this.openSnackBar("Su sesión no es de tipo Profesor", "Cerrar");
      this.router.navigate(['/login']);
    }
    else {
      //agregar redireccion a la vista anterior
      this.menu.fillerNav = [];
      var menuActtual = [
        { name: "Crear Tarea", route: "/creartarea", icon: "add_task" },
        { name: "Ver Tareas", route: "/ver-tareas", icon: "work" },
        { name: "Cerrar Session", route: "/login", icon: "exit_to_app" }
      ]
      this.menu.fillerNav = menuActtual;
      this.idclase = Number(sessionStorage.getItem("id_clase"))
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
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
