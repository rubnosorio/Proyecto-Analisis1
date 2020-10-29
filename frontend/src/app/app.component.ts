import { Component } from '@angular/core';
import { DialogService } from './services/shared/dialog.service';
import { Router } from "@angular/router";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'frontend';
  constructor(private dialogService: DialogService, private router:Router){
    console.log('entro');
    //this.router.navigate(['login']);
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
  onPrueba2(){
    this.dialogService.openConfirmDialogEliminarExamen()
    .afterClosed().subscribe(res => {
      console.log(res);
      if(res.prueba){
        console.log('entra acá');
      }else{
        
      }
    })
  }

  onPrueba3(){
    this.dialogService.openCrearClase()
    .afterClosed().subscribe(res => {
      console.log(res);
      console.log(res.resp);
      if(res.resp){
        console.log('entra acá');
      }else{
        
      }
    })
  }
  //fin Implementación dialogo
}
