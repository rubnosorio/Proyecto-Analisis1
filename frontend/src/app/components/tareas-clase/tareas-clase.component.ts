import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Tarea } from "../../models/tarea";
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, } from '@angular/material/snack-bar';
import { SelectTareaService } from "../../services/select-tarea/select-tarea.service";

@Component({
  selector: 'app-tareas-clase',
  templateUrl: './tareas-clase.component.html',
  styleUrls: ['./tareas-clase.component.scss']
})
export class TareasClaseComponent implements OnInit {

  lista_tareas:Tarea[]=[];
  id_clase:number;

  constructor(private selectTareaService: SelectTareaService, private router: Router, private _snackBar: MatSnackBar) { 
    this.id_clase=Number(sessionStorage.getItem("id_clase"));
    this.selectTareaService.getTareasClase(this.id_clase).subscribe((res:Tarea[])=>{
      this.lista_tareas=res;
      console.log(this.lista_tareas);
    });
  }

  ngOnInit(): void {
  }

  Calificar(id_tarea:number){
    sessionStorage.setItem("id_tarea",id_tarea.toString());
    this.router.navigate(['actualizar_nota_tarea']);
  }

}
