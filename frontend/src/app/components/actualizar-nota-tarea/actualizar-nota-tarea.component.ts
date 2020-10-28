import { Component, OnInit } from '@angular/core';
import { SelectTareaService } from "../../services/select-tarea/select-tarea.service";
import { Router } from '@angular/router';
import { MatSnackBar, MatSnackBarHorizontalPosition, MatSnackBarVerticalPosition, } from '@angular/material/snack-bar';

@Component({
  selector: 'app-actualizar-nota-tarea',
  templateUrl: './actualizar-nota-tarea.component.html',
  styleUrls: ['./actualizar-nota-tarea.component.scss']
})
export class ActualizarNotaTareaComponent implements OnInit {

  lista_entregas:any[]=[];

  constructor(private selectTareaService:SelectTareaService) { 
    this.selectTareaService.getEntregas(1).subscribe((res:any)=>{
      console.log(res);
      this.lista_entregas=res;
    });
  }

  ngOnInit(): void {
  }

  step = 0;
  contador:number=0;

  setStep(index: number) {
    this.step = index;
  }

  actualizarNota(index:string) {
    console.log(index);
    //this.step++;
  }

  prevStep() {
    this.step--;
  }

  aaa: string = null


}
