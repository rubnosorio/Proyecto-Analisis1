import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ToastrService } from 'ngx-toastr';
import { UnirseAClaseService } from '../../services/unirse_a_clase/unirse-a-clase.service';


@Component({
  selector: 'app-unirse-clase',
  templateUrl: './unirse-clase.component.html',
  styleUrls: ['./unirse-clase.component.scss']
})
export class UnirseClaseComponent implements OnInit {
  serv={
    cod_clase:"",
    id_usuario: 1
}
  constructor(private toastr: ToastrService,private dialog: MatDialog,private unirseaclase: UnirseAClaseService) { }

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
      this.serv.cod_clase=cod;
      this.unirseaclase.unirse_clase(this.serv).subscribe((res:any) => {
        if (res.statusCode == 200) {
          this.toastr.error('Inserción Correcta','Agregado Correctamente');
        } else {
          this.toastr.error('ERROR','No se puedo insertar');
        }
      });
    }else{
      //this.toastr.error('Código incorrecto','Código invalido');
    }
  }

}
