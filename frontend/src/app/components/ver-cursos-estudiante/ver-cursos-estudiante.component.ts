import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { VerClasesEstudianteService } from '../../services/ver-clases-estudiante/ver-clases-estudiante.service';

@Component({
  selector: 'app-ver-cursos-estudiante',
  templateUrl: './ver-cursos-estudiante.component.html',
  styleUrls: ['./ver-cursos-estudiante.component.scss']
})
export class VerCursosEstudianteComponent implements OnInit {

  user = {
      id_usuario: 0
  }
  clases:any[];

  constructor(private router: Router, private get_clases:VerClasesEstudianteService) { 
    if(!sessionStorage.getItem("id_usuario")){
      this.router.navigate(['/login']);
    }
    if(sessionStorage.getItem("tipo_usuario") != 'estudiante'){
      this.router.navigate(['/login']);
    }
    this.user.id_usuario = Number(sessionStorage.getItem("id_usuario"));
    this.get_clases.ObtenerClases(this.user).subscribe((res:any[]) =>{
      this.clases = res;
    });
  }

  ngOnInit(): void {
  }

  UnirseaClase(){
    this.router.navigate(['/unirse_clase']);
  }

  IraClase(clase:any){
    sessionStorage.setItem('id_clase',JSON.stringify(clase.id_clase));
    this.router.navigate(['/principal_estudiante']); // Interior clase usuario
  }

  DarmedeBaja(clase:any){
    // Pendiente agregar darse de baja
  }
}
