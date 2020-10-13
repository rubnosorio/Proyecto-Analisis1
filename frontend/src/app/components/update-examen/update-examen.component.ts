import { Component, OnInit } from '@angular/core';
import { UpdateExamenService } from '../../services/update-examen/update-examen.service';
import { Examen } from '../../models/examen'
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-update-examen',
  templateUrl: './update-examen.component.html',
  styleUrls: ['./update-examen.component.scss']
})
export class UpdateExamenComponent implements OnInit {
  
  examen: Examen = new Examen(1,'Prueba Actualizacion','2020-08-01','Examen de Prueba', 4, 15, 0, 1,JSON.parse('[ {\"opciones\": [{\"respuesta\": \"lunes\", \"es_correcta\": 1}, {\"respuesta\": \"martes\", \"es_correcta\": 0}, {\"respuesta\": \"miercoles\", \"es_correcta\": 0}, {\"respuesta\": \"ninguna de las anteriores es correcta\", \"es_correcta\": 0}], \"pregunta\": \"¿Que día es hoy?\", \"num_correctas\": 1, \"tipo_respuesta\": 0}, {\"opciones\": [{\"respuesta\": \"Overwatch\", \"es_correcta\": 1}, {\"respuesta\": \"COD\", \"es_correcta\": 1}, {\"respuesta\": \"PUBG\", \"es_correcta\": 1}, {\"respuesta\": \"Free Fire\", \"es_correcta\": 0}], \"pregunta\": \"¿Que juego(s) juega Erick?\", \"num_correctas\": 3, \"tipo_respuesta\": 0}, {\"opciones\": [{\"respuesta\": \"Alexander\", \"es_correcta\": 1}], \"pregunta\": \"¿Cual es el segundo nombre de Erick\", \"num_correctas\": 1, \"tipo_respuesta\": 1}, {\"opciones\": [{\"respuesta\": \"Verdadero\", \"es_correcta\": 1}, {\"respuesta\": \"Falso\", \"es_correcta\": 0}], \"pregunta\": \"¿Sale el semestre?\", \"num_correctas\": 1, \"tipo_respuesta\": 2}]'));
  
  constructor(private toastr: ToastrService, private update_examen:UpdateExamenService, private router:Router) {
    if(!sessionStorage.getItem("id_usuario")){
      this.router.navigate(['/login']);
    }
    if(!sessionStorage.getItem("examenactual")){
      this.router.navigate(['/']);
    }
    this.examen = JSON.parse(sessionStorage.getItem('examenactual'))
    this.examen.preguntas = JSON.parse(this.examen.preguntas)
  }

  ngOnInit(): void {
  }

  actualizar(){
    var _valor: number = +this.examen.valor_examen;
    var _estado: number = +this.examen.estado;
    this.examen.valor_examen=_valor;
    this.examen.estado=_estado;
    if(this.examen.valor_examen <= 0){
      this.toastr.error('Valor del Examen debe ser mayor a 0.','Error al Actualizar');
    }else if(this.examen.nombre_examen.length != 0 && this.examen.fecha.length != 0 && this.examen.descripcion.length != 0 && this.examen.preguntas.length != 0){  
      var splitted = this.examen.fecha.split("-", 3);
      this.examen.fecha=splitted[2]+'/'+splitted[1]+'/'+splitted[0];
      this.update_examen.update_examen(this.examen).subscribe(
        res => {
          console.log(res);
          this.toastr.success('El examen fue actualizada con exito!','Examen Actualizado');
        },
       err => {
        console.error(err);
       }
      );
    }else{
      this.toastr.error('No pueden registrarse campos vacios en el examen!','Error al Actualizar');
    }
  }

  cancelacion(){
    this.router.navigate(['/']);
  }

}
