import { Component } from '@angular/core';
import { DialogService } from './services/shared/dialog.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  constructor(private dialogService: DialogService){
  }
  //Implementación dialogo
  onPrueba(){
    this.dialogService.openConfirmDialog()
    .afterClosed().subscribe(res => {
      console.log(res);
      if(res){
        //realizar acción 
      }
    })
  }
  //fin Implementación dialogo
}
