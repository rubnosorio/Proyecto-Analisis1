import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { Router } from '@angular/router';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';
import {Publicacion} from '../../models/publicacion';
import {ObPublicacionesService}from '../../services/Ob_publicaciones/ob-publicaciones.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-vista-publicaciones-e',
  templateUrl: './vista-publicaciones-e.component.html',
  styleUrls: ['./vista-publicaciones-e.component.scss']
})
export class VistaPublicacionesEComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  publicaciones: Publicacion[]=[];
  idUsuario=0;
  idCurso=0;
  Curso='aaaa';

  constructor(
    private menu: NavbarComponent,
    private router: Router,
    private _snackBar: MatSnackBar,
    public obpublic: ObPublicacionesService,
    private toast:ToastrService

  ) {
    if (!sessionStorage.getItem("id_usuario")) {
      this.openSnackBar("No ha iniciado sesión", "Cerrar");
      this.router.navigate(['/login']);
    }

    this.idUsuario = Number(sessionStorage.getItem("id_usuario"));
    this.idCurso = Number(sessionStorage.getItem("id_clase"));
    this.Curso= sessionStorage.getItem("clase");
    this.Curso= this.Curso.substr(1,this.Curso.length-2);
   }


   openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  ngOnInit(): void {
    this.getPublicaciones();
  }

  getPublicaciones(){
    this.obpublic.getPublicacionesEstu(this.idCurso).subscribe((data_api: any) => {
      console.log(data_api);
      this.publicaciones = data_api;
    })
  }

}
