import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-actualizar-publicacion',
  templateUrl: './actualizar-publicacion.component.html',
  styleUrls: ['./actualizar-publicacion.component.scss']
})
export class ActualizarPublicacionComponent implements OnInit {

  id_publicacion = 0;

  constructor(private route: ActivatedRoute,) {
    this.obtenerParametro()
  }

  ngOnInit(): void {

  }

  obtenerParametro(): any{
    this.id_publicacion = Number(this.route.snapshot.paramMap.get('id'));
    return true;
  }

}
