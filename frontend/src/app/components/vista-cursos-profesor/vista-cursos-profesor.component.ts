import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {PClase} from '../../models/pclase';
import {VistaCursosPofesorService} from '../../services/vista_cursos_profesor/vista-cursos-pofesor.service';
import { DialogService } from '../../services/shared/dialog.service';
import { CrearClaseService } from '../../services/crear_clase/crear-clase.service';
import { ToastrService } from 'ngx-toastr';
import { NavbarComponent } from "../navbar/navbar.component";

@Component({
  selector: 'app-vista-cursos-profesor',
  templateUrl: './vista-cursos-profesor.component.html',
  styleUrls: ['./vista-cursos-profesor.component.scss']
})
export class VistaCursosProfesorComponent implements OnInit {

  clases: PClase[]=[];
  idUsuario=0;

  constructor(private toastr: ToastrService,private router: Router, public CursosProfesor:VistaCursosPofesorService,private dialogService: DialogService,
    private crear_clase:CrearClaseService, private menu: NavbarComponent, ) { 
    if(!sessionStorage.getItem("id_usuario")){
      menu.openSnackBar("No ha iniciado sesión", "Cerrar");
      this.router.navigate(['/login']);
    }
    
    this.idUsuario = Number(sessionStorage.getItem("id_usuario"))
    this.menu.fillerNav = [];
      var menuActtual = [
        { name: "Cerrar Session", route: "/login", icon: "exit_to_app" }
      ]
      this.menu.fillerNav = menuActtual;
  }

  ngOnInit(): void {
    this.getClases();
  }


  getClases(){
    this.CursosProfesor.getClases(this.idUsuario).subscribe((data_api: any) => {
      console.log(data_api);
      this.clases = data_api;
    })
  }

  EliminarCurso(Clase:PClase){

  }

  Crear_clase(){
    this.dialogService.openCrearClase()
    .afterClosed().subscribe(res => {
      console.log(res);
      if(res.resp){
        this.crear_clase.CrearClase(res.Clase,this.idUsuario).subscribe(
          res => {
            console.log(res);
            console.log(res.status);
            if(res.status==200){
              this.toastr.success('El Curso fue creado con exito!','Curso Creado');
            }else{
              this.toastr.error('El curso no fue creado!','Curso no creado');
            }
            
          },
          err => {
            console.error(err);
            console.log(err.status);
            if(err.status==200){
              this.toastr.success('El Curso fue creado con exito!','Curso Creado');
            }else{
              this.toastr.error('El curso no fue creado!','Curso no creado');
            }
          }
        );
        
        
      }
    })
  }

  Ir_a_Curso(Clase:PClase){
    sessionStorage.setItem("id_clase",JSON.stringify(Clase.id_clase));
    sessionStorage.setItem("clase",JSON.stringify(Clase.nombre_clase));
    this.router.navigate(['/principal_profesor']);
  }

}
