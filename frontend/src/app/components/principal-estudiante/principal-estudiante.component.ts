import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';

@Component({
  selector: 'app-principal-estudiante',
  templateUrl: './principal-estudiante.component.html',
  styleUrls: ['./principal-estudiante.component.scss']
})
export class PrincipalEstudianteComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor(private router: Router, private _snackBar: MatSnackBar) {
    if(!sessionStorage.getItem("id_usuario")){
      this.openSnackBar("No ha iniciado sesión", "Cerrar");
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
  }

  redirect(url) {
    this.router.navigate([url]);
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

}
