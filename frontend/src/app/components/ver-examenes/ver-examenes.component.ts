import { Component, OnInit } from '@angular/core';
import { VerExamenService } from '../../services/examen/ver-examen.service';
import { Examen } from '../../models/examen'
import { DialogService } from '../../services/shared/dialog.service';
import { EliminarExamenService } from '../../services/eliminar_examen/eliminar-examen.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-ver-examenes',
  templateUrl: './ver-examenes.component.html',
  styleUrls: ['./ver-examenes.component.scss']
})
export class VerExamenesComponent implements OnInit {

  examenes: Examen[]
  panelOpenState = false;

  constructor(private toastr: ToastrService,private dialogService: DialogService,private eliminar_examen:EliminarExamenService,
  private examenService: VerExamenService) {
    this.gets()
  }

  ngOnInit(): void {
  }

  gets(){
    //obtener todos los examenes
    this.examenService.gets(1).subscribe((dataAPI: any) => {
      this.examenes = dataAPI
    })
  }

  edit(){
    //llamar o redireccionar al componente de editar el examen
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
