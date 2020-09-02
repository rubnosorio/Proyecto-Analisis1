import { Component, OnInit } from '@angular/core';
import { Examen } from '../../models/examen'

@Component({
  selector: 'app-ver-examenes',
  templateUrl: './ver-examenes.component.html',
  styleUrls: ['./ver-examenes.component.scss']
})
export class VerExamenesComponent implements OnInit {

  examenes: Examen[]
  panelOpenState = false;

  constructor() {
    this.gets()
  }

  ngOnInit(): void {
  }

  gets(){
    //obtener todos los examenes
    this.examenes = [
      new Examen(0,"Examen 0", '30/08/2020 13:26', "Estas son las instrucciones que debe tener un examen.", 4, 10, 0, 1, []),
      new Examen(1,"Examen 1", '30/08/2020 13:26', "Estas son las instrucciones que debe tener un examen.", 4, 10, 0, 1, []),
      new Examen(2,"Examen 2", '30/08/2020 13:26', "Estas son las instrucciones que debe tener un examen.", 4, 10, 0, 1, []),
      new Examen(3,"Examen 3", '30/08/2020 13:26', "Estas son las instrucciones que debe tener un examen.", 4, 10, 0, 1, []),
      new Examen(4,"Examen 4", '30/08/2020 13:26', "Estas son las instrucciones que debe tener un examen.", 4, 10, 0, 1, []),
      new Examen(5,"Examen 5", '30/08/2020 13:26', "Estas son las instrucciones que debe tener un examen.", 4, 10, 0, 1, []),
      new Examen(6,"Examen 6", '30/08/2020 13:26', "Estas son las instrucciones que debe tener un examen.", 4, 10, 0, 1, []),
      new Examen(7,"Examen 7", '30/08/2020 13:26', "Estas son las instrucciones que debe tener un examen.", 4, 10, 0, 1, []),
      new Examen(8,"Examen 8", '30/08/2020 13:26', "Estas son las instrucciones que debe tener un examen.", 4, 10, 0, 1, []),
      new Examen(9,"Examen 9", '30/08/2020 13:26', "Estas son las instrucciones que debe tener un examen.", 4, 10, 0, 1, [])

    ]
  }

  edit(){
    //llamar o redireccionar al componente de editar el examen
  }

  delete(){
    //llamar o redireccionar al componente de eliminar examen
  }

}
