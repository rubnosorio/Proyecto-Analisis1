import { Component, OnInit } from '@angular/core';
import { SelectTareaService } from "../../services/select-tarea/select-tarea.service";
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, } from '@angular/material/snack-bar';

@Component({
  selector: 'app-actualizar-nota-tarea',
  templateUrl: './actualizar-nota-tarea.component.html',
  styleUrls: ['./actualizar-nota-tarea.component.scss']
})
export class ActualizarNotaTareaComponent implements OnInit {

  lista_entregas:any[]=[];
  id_tarea:number;
  id_usuario:number;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private selectTareaService:SelectTareaService, private _snackBar: MatSnackBar, private router:Router) { 
    this.id_tarea=Number(sessionStorage.getItem("id_tarea"));
    this.id_usuario=Number(sessionStorage.getItem("id_usuario"));
    this.selectTareaService.getEntregas(this.id_tarea).subscribe((res:any)=>{
      console.log(res);
      this.lista_entregas=res;
    });
  }

  ngOnInit(): void {
  }

  step = 0;
  contador:number=0;

  setStep(index: number) {
    this.step = index;
  }

  actualizarNota(nota:number) {
    //console.log(index);
    this.selectTareaService.UpdateNota(this.id_tarea, this.id_usuario,nota).subscribe((res:any)=>{
      this.openSnackBar("Tarea calificada correctamente", "Cerrar");
    },(err:any)=>{
      this.openSnackBar("Ha ocurrido un error, intente nuevamente", "Cerrar");
    });
    //this.step++;
  }

  prevStep() {
    this.step--;
  }

  aaa: string = null
  
  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  regresar(){
    this.router.navigate(['tareas_clase']);
  }

}
