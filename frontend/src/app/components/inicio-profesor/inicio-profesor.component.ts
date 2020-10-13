import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { Router } from '@angular/router';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';

@Component({
  selector: 'app-inicio-profesor',
  templateUrl: './inicio-profesor.component.html',
  styleUrls: ['./inicio-profesor.component.scss']
})
export class InicioProfesorComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  constructor
    (
      private menu: NavbarComponent,
      private router: Router,
      private _snackBar: MatSnackBar
    ) {
    if (!sessionStorage.getItem("id_usuario")) {
      this.openSnackBar("No ha iniciado sesión", "Cerrar");
      this.router.navigate(['/login']);
    }
    else {
      this.menu.fillerNav = [];
      var menuActtual = [
        { name: "Ver Tareas", route: "/ver-tareas", icon: "work" },
        { name: "Cerrar Session", route: "/login", icon: "exit_to_app" }
      ]
      this.menu.fillerNav = menuActtual;
    }
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
      horizontalPosition: this.horizontalPosition,
      verticalPosition: this.verticalPosition,
    });
  }

  ngOnInit(): void {
  }

}
