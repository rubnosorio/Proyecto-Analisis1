import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, } from '@angular/material/snack-bar';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-principal-estudiante',
  templateUrl: './principal-estudiante.component.html',
  styleUrls: ['./principal-estudiante.component.scss']
})
export class PrincipalEstudianteComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';


  constructor(private router: Router, private _snackBar: MatSnackBar, private menu: NavbarComponent) {
    if (!sessionStorage.getItem("id_usuario")) {
      this.openSnackBar("No ha iniciado sesión", "Cerrar");
      this.router.navigate(['/login']);
    }
    else if (sessionStorage.getItem("tipo_usuario") == "catedratico") {
      this.openSnackBar("Su sesión no es de tipo Estudiante", "Cerrar");
      this.router.navigate(['/login']);
    }
    else {
      this.menu.fillerNav = [];
      var newmenu = [
        { name: "Mis notas", route: "/control_notas_estudiante", icon: "insert_drive_file" },
        { name: "Mis tareas", route: "/entregar-tarea", icon: "assignment" },
        { name: "Cerrar Sesion", route: "/login", icon: "exit_to_app" }
      ]
      this.menu.fillerNav=newmenu;
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
