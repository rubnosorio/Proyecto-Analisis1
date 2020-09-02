import { Component, OnInit } from '@angular/core';
import { VerExamenService } from '../../services/examen/ver-examen.service';
import { Examen } from '../../models/examen'

@Component({
  selector: 'app-ver-examenes',
  templateUrl: './ver-examenes.component.html',
  styleUrls: ['./ver-examenes.component.scss']
})
export class VerExamenesComponent implements OnInit {

  examenes: Examen[]
  panelOpenState = false;

  constructor(private examenService: VerExamenService) {
    this.gets()
  }

  ngOnInit(): void {
  }

  gets(){
    //obtener todos los examenes
    this.examenService.gets(1).subscribe((dataAPI: any) => {
      this.examenes = dataAPI
    })
  }

  edit(){
    //llamar o redireccionar al componente de editar el examen
  }

  delete(){
    //llamar o redireccionar al componente de eliminar examen
  }

}
