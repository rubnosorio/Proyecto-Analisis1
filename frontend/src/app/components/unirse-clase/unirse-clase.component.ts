import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-unirse-clase',
  templateUrl: './unirse-clase.component.html',
  styleUrls: ['./unirse-clase.component.scss']
})
export class UnirseClaseComponent implements OnInit {

  constructor(private dialog: MatDialog) { }

  ngOnInit(): void {
   
  }

  CodigoValido (cod:string):boolean{
    if(cod.length==9){
      return true;
    }
    return false;
  }
  


  Unirse(cod:string){
    if(this.CodigoValido(cod)){

    }
  }

}
