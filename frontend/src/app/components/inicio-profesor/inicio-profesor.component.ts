import { Component, OnInit } from '@angular/core';
import { NavbarComponent } from "../navbar/navbar.component";
import { Router } from '@angular/router';
import {MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition,} from '@angular/material/snack-bar';
import {Publicacion} from '../../models/publicacion';
import {ObPublicacionesService}from '../../services/Ob_publicaciones/ob-publicaciones.service';
import {EliminarPublicacionService} from '../../services/eliminar-publicacion/eliminar-publicacion.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-inicio-profesor',
  templateUrl: './inicio-profesor.component.html',
  styleUrls: ['./inicio-profesor.component.scss']
})
export class InicioProfesorComponent implements OnInit {

  horizontalPosition: MatSnackBarHorizontalPosition = 'center';
  verticalPosition: MatSnackBarVerticalPosition = 'top';

  publicaciones: Publicacion[]=[];
  idUsuario=0;
  idCurso=0;
  Curso='aaaa';
  constructor
    (
      private menu: NavbarComponent,
      private router: Router,
      private _snackBar: MatSnackBar,
      public obpublic: ObPublicacionesService,
      public ep: EliminarPublicacionService,
      private toast:ToastrService
    ) {
    if (!sessionStorage.getItem("id_usuario")) {
      this.openSnackBar("No ha iniciado sesión", "Cerrar");
      this.router.navigate(['/login']);
    }
    else if (sessionStorage.getItem("tipo_usuario") == "estudiante") {
      this.openSnackBar("Su sesión no es de tipo Profesor", "Cerrar");
      this.router.navigate(['/login']);
    }
    else {
      this.menu.fillerNav = [];
      var menuActtual = [
        { name: "Notas", route: "/notas_estudiantes", icon: "receipt_long" },
        { name: "Crear Tarea", route: "/creartarea", icon: "add_task" },
        { name: "Ver Tareas", route: "/ver-tareas", icon: "work" },
        { name: "Calificar Tareas", route: "/tareas_clase", icon: "done" },
        { name: "Crear Examen", route: "/crear_examen", icon: "create" },
        { name: "Ver Examenes", route: "/ver-examenes", icon: "assignment" },
        { name: "Mis Cursos", route: "/Cursos_Profesor", icon: "list" },
        { name: "Cerrar Session", route: "/login", icon: "exit_to_app" }
      ]
      this.menu.fillerNav = menuActtual;
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
    this.obpublic.getPublicaciones(this.idUsuario,this.idCurso).subscribe((data_api: any) => {
      console.log(data_api);
      this.publicaciones = data_api;
    })
  }

  Crear_publicacion(){
    this.router.navigate(['/crear_publicacion']);
  }

  Eliminar_Publicacion(pub:Publicacion){
    this.ep.eliminar_publicacion(pub).subscribe((res: any) => {
      if(res.statusCode==200){
        this.toast.success('Se ha eliminado la publicación con exito', 'Eliminar Publicación');
      }
    })
  }

  Actualizar_Publicacion(pub:Publicacion){
    this.router.navigate(['/actualizar_publicacion/'+pub.id_publicacion]);
  }

}
