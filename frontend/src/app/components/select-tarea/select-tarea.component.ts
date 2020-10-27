import { Component, OnInit } from '@angular/core';
import { SelectTareaService } from "../../services/select-tarea/select-tarea.service";
import { Router } from '@angular/router';
import { TareasUsuarioClase } from "../../models/tareasUsuarioClase/tareas-usuario-clase";
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, } from '@angular/material/snack-bar';

@Component({
  selector: 'app-select-tarea',
  templateUrl: './select-tarea.component.html',
  styleUrls: ['./select-tarea.component.scss']
})
export class SelectTareaComponent implements OnInit {

  lista_tareas: TareasUsuarioClase[] = [];
  fecha: Date = new Date();
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private selectTareaService: SelectTareaService, private router: Router, private _snackBar: MatSnackBar) {
    if (!sessionStorage.getItem("id_usuario")) {
      this.openSnackBar("No ha iniciado sesión", "Cerrar");
      this.router.navigate(['/login']);
    }
    else if (sessionStorage.getItem("tipo_usuario") == "catedratico") {
      this.openSnackBar("Su sesión no es de tipo Estudiante", "Cerrar");
      this.router.navigate(['/login']);
    }
    else {
      var id_estudiante = Number(sessionStorage.getItem("id_usuario"));
      var id_clase = Number(sessionStorage.getItem("id_clase"));
      this.selectTareaService.getTareas(id_clase, id_estudiante).subscribe((res: any) => {
        this.lista_tareas = res.lista_tareas;
        console.log(this.lista_tareas);
      });
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
  }

  verificar_fecha(fecha: string) {
    let final = new Date(fecha);
    let actual = new Date();
    if (actual.getTime() <= final.getTime()) {
      return 1;
    }
    return 0;
  }

  entregarTarea(id_tarea: number) {
    sessionStorage.setItem("id_tarea", id_tarea.toString());
    var tarea_entregar;
    for(let i=0;i<this.lista_tareas.length;i++){
      if(this.lista_tareas[i].id_tarea==id_tarea){
        tarea_entregar=this.lista_tareas[i];
      }
    }
    sessionStorage.setItem("tarea",JSON.stringify(tarea_entregar));
    this.router.navigate(['/entregar-tarea']);
  }

}
