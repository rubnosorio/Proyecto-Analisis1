import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Tarea } from '../../models/tarea';
import { UpdateTareaService } from '../../services/update-tarea.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-tarea',
  templateUrl: './update-tarea.component.html',
  styleUrls: ['./update-tarea.component.scss'],
  encapsulation: ViewEncapsulation.None
})

export class UpdateTareaComponent implements OnInit {

  tarea: Tarea = new Tarea(0,"Tarea 1","Instrucciones\n1) Instruccion 1\n2) Instruccion 2\n3) Instruccion 3\n","","2020-08-30T23:59");

  constructor(private toastr: ToastrService, private update_tarea:UpdateTareaService, private router:Router) { }

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
      this.toastr.success('La tarea fue actualizada con exito!','Tarea Actualizada');
    }else{
      this.toastr.error('No pueden registrarse campos vacios en la tarea!','Error al Actualizar');
    }
  }

  cancelacion(){
    this.router.navigate(['/']);
  }

}
