import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-unirse-clase',
  templateUrl: './unirse-clase.component.html',
  styleUrls: ['./unirse-clase.component.scss']
})
export class UnirseClaseComponent implements OnInit {

  constructor(private toastr: ToastrService,private dialog: MatDialog) { }

  ngOnInit(): void {
   
  }

  CodigoValido (cod:string):boolean{
    if(cod.length==9){
      if(cod.charAt(4)=='-'){
        return true;
      }
    }
    return false;
  }



  Unirse(cod:string){
    if(this.CodigoValido(cod)){
      
    }else{
      this.toastr.error('Código incorrecto','Código invalido');
    }
  }

}
