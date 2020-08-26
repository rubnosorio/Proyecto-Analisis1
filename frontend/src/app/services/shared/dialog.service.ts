import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { DialogoComponent } from '../../components/dialogo/dialogo.component';

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

}
