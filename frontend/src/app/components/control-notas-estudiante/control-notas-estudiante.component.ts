import { Component, OnInit } from '@angular/core'; 
import { ControlNotasEstudianteService } from '../../services/control-notas-estudiante/control-notas-estudiante.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-control-notas-estudiante',
  templateUrl: './control-notas-estudiante.component.html',
  styleUrls: ['./control-notas-estudiante.component.scss']
})
export class ControlNotasEstudianteComponent implements OnInit {

  tareas = [];
  examenes = [];
  NotaTotal;
  displayedColumns: string[] = ['nombre', 'nota'];
  nota=false;
  data = {
    id_usuario: 1,
    id_clase: 1
  }
  
  constructor(private controlnotas: ControlNotasEstudianteService,
    private router: Router) {
      if(!sessionStorage.getItem("id_usuario")){
        this.router.navigate(['/login']);
      }
      if(!sessionStorage.getItem("id_clase")){
        this.router.navigate(['/']);
      }
      this.data.id_usuario = Number(sessionStorage.getItem("id_usuario"));
      this.data.id_clase = Number(sessionStorage.getItem("id_clase"));
    }

  ngOnInit(): void {
    this.controlnotas.get_tareas(this.data).subscribe(res => {
      let Tareas = JSON.parse(JSON.stringify(res));
      this.tareas = Tareas.Tareas;
      this.controlnotas.get_examenes(this.data).subscribe(res => {
        let Examenes = JSON.parse(JSON.stringify(res));
        this.examenes = Examenes.Examenes;
      });
    });
  }

  CalcularNota(){
    this.controlnotas.get_notas(this.data).subscribe(res => {
      let total = {
        nota: 0
      } 
      total = JSON.parse(JSON.stringify(res));
      if(this.CantidadValida(total.nota) && this.NotaValida(total.nota)){
        this.NotaTotal = total.nota;
      }
    });
    this.nota=true;
  }

  CantidadValida(tamanio:number){
    if(tamanio >= 0){
      return true;
    }
    return false;
  }

  NotaValida(nota:number){
    if(nota >= 0 && nota <=100){
      return true;
    }else{
      return false;
    }
  }
}
