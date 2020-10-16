import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogoComponent } from '../../components/dialogo/dialogo.component';
import { DialogoEliminarExamenComponent } from '../../components/dialogo-eliminar-examen/dialogo-eliminar-examen.component';
import { CrearClaseComponent } from '../../components/crear-clase/crear-clase.component';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) { }

  openConfirmDialog(){
    return this.dialog.open(DialogoComponent,{
      width: "390xp",
      panelClass: 'confirm-dialog-container',
      disableClose: true
  });
  }

  openConfirmDialogEliminarExamen(){
    return this.dialog.open(DialogoEliminarExamenComponent,{
      width: "390xp",
      panelClass: 'confirm-dialog-container',
      disableClose: true
  });
  }

  openCrearClase(){
    return this.dialog.open(CrearClaseComponent,{
      width: "390xp",
      panelClass: 'confirm-dialog-container',
      disableClose: true
  });
  }

}
