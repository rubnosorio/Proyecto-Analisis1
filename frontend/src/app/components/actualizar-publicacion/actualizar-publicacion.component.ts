import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { ActualizarPublicacionService } from '../../services/actualizar-publicacion/actualizar-publicacion.service'


@Component({
  selector: 'app-actualizar-publicacion',
  templateUrl: './actualizar-publicacion.component.html',
  styleUrls: ['./actualizar-publicacion.component.scss']
})
export class ActualizarPublicacionComponent implements OnInit {

  publicacion = {id_publicacion: 0, publicacion: "esta es una publicacion de prueba", fecha: "2020/10/26 12:55", id_clase: 0, id_usuario: 0}

  constructor(private route: ActivatedRoute,
    private publicacionService: ActualizarPublicacionService,
    private toastr: ToastrService,
    private router: Router,
  ) {
    if (!sessionStorage.getItem("id_usuario")) {
      this.toastr.error("No ha iniciado sesión");
      this.router.navigate(['/login']);
    }
    else if (sessionStorage.getItem("tipo_usuario") == "estudiante") {
      this.toastr.error("Su sesión no es de tipo Profesor");
      this.router.navigate(['/login']);
    }
    this.obtenerParametro();
    this.obtenerPublicacion();
  }

  ngOnInit(): void {

  }

  obtenerPublicacion(): any{
    this.publicacionService.get(this.publicacion).subscribe((data: any) => {
      this.publicacion = data.data;
    }, err => {
      this.toastr.error(err.error.message)
    })
    return true;
  }

  obtenerParametro(): any{
    this.publicacion.id_publicacion = Number(this.route.snapshot.paramMap.get('id'));
    return true;
  }

  actualizarPublicacion(){
    this.publicacionService.update(this.publicacion).subscribe((data:any) => {
      this.toastr.success(data.message);
      this.obtenerPublicacion();
    }, err => {
      this.toastr.error(err.error.message);
    })
  }

}
