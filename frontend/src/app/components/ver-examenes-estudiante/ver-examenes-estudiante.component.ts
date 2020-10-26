import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavbarComponent } from "../navbar/navbar.component";
import { VerExamenesEstudianteService } from '../../services/ver-examenes-estudiante/ver-examenes-estudiante.service';

@Component({
  selector: 'app-ver-examenes-estudiante',
  templateUrl: './ver-examenes-estudiante.component.html',
  styleUrls: ['./ver-examenes-estudiante.component.scss']
})
export class VerExamenesEstudianteComponent implements OnInit {

  examenes = [];
  clase = {
    id_clase:0
  }

  constructor(private router: Router,private menu: NavbarComponent,private examenesdb:VerExamenesEstudianteService) { 
    if(!sessionStorage.getItem("id_usuario")){
      this.menu.openSnackBar("No ha iniciado sesión", "Cerrar");
      this.router.navigate(['/login']);
    }
    if(sessionStorage.getItem("tipo_usuario") != 'estudiante'){
      this.menu.openSnackBar("No ha iniciado sesión", "Cerrar");
      this.router.navigate(['/login']);
    }
    this.clase.id_clase = Number(sessionStorage.getItem("id_clase"));
    this.examenesdb.get_examenes(this.clase).subscribe((res:any[]) => {
      this.examenes=res;
    });
  }

  ngOnInit(): void { }

  resolver_examen(examen:any){
    this.router.navigate(['/resolver_examen/'+examen.id_examen]);
  }

  regresar(){
    this.router.navigate(['/principal_estudiante']);
  }
}
