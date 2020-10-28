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

  constructor(private selectTareaService: SelectTareaService, private router: Router, private _snackBar: MatSnackBar) { 
    this.selectTareaService.getTareasClase(1).subscribe((res:Tarea[])=>{
      this.lista_tareas=res;
      console.log(this.lista_tareas);
    });
  }

  ngOnInit(): void {
  }

}
