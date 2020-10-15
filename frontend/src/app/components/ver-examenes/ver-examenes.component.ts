import { Component, OnInit } from '@angular/core';
import { VerExamenService } from '../../services/examen/ver-examen.service';
import { Examen } from '../../models/examen'
import { DialogService } from '../../services/shared/dialog.service';
import { EliminarExamenService } from '../../services/eliminar_examen/eliminar-examen.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router'
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';

@Component({
  selector: 'app-ver-examenes',
  templateUrl: './ver-examenes.component.html',
  styleUrls: ['./ver-examenes.component.scss']
})
export class VerExamenesComponent implements OnInit {

  examenes: Examen[]
  panelOpenState = false;
  idclase = 0;
  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private toastr: ToastrService,private dialogService: DialogService,private eliminar_examen:EliminarExamenService,
  private examenService: VerExamenService, private _snackBar: MatSnackBar,
  private router: Router) {
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
    this.gets();
  }

  gets(){
    //obtener todos los examenes
    this.examenService.gets(this.idclase).subscribe((dataAPI: any) => {
      this.examenes = dataAPI
    })
  }

  edit(examen: Examen){
    //llamar o redireccionar al componente de editar el examen
    sessionStorage.setItem("examenactual",JSON.stringify(examen));
    this.router.navigate(['/update_examen']);
  }

  delete(examen:Examen){
    this.dialogService.openConfirmDialogEliminarExamen()
    .afterClosed().subscribe(res => {
      console.log(res);
      if(res){
        this.eliminar_examen.delete_Examen(examen).subscribe(
          res => {
            console.log(res);
            
          },
          err => {
            console.error(err);
          }
        );
        this.toastr.success('El examen fue eliminado con exito!','Examen Eliminado');
      }
    })
  }

}
