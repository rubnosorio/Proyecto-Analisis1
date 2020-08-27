import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Tarea } from '../../models/tarea';
import { UpdateTareaService } from '../../services/update-tarea.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-tarea',
  templateUrl: './update-tarea.component.html',
  styleUrls: ['./update-tarea.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class UpdateTareaComponent implements OnInit {

  tarea: Tarea = new Tarea(0,"Tarea 1","Instrucciones\n1) Instruccion 1\n2) Instruccion 2\n3) Instruccion 3\n","","2020-08-30T23:59");

  constructor(private update_tarea:UpdateTareaService,private router:Router) { }

  ngOnInit(): void {
  }

  actualizar(){
    if(this.tarea.nombre_tarea.length != 0 && this.tarea.descripcion.length != 0 && this.tarea.fecha_entrega.length != 0){
      this.update_tarea.update_Tarea(this.tarea).subscribe(
        res => {
          console.log(res);
        },
        err => {
          console.error(err);
        }
      );
    }else{
      console.log('No se puede actualizar tarea si esta vacia.');
    }
  }

  cancelacion(){
    this.router.navigate(['/']);
  }

}
