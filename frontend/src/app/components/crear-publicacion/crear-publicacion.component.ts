import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crear-publicacion',
  templateUrl: './crear-publicacion.component.html',
  styleUrls: ['./crear-publicacion.component.scss']
})
export class CrearPublicacionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  minlenght(lenght: number): boolean {
    if (lenght < 5) {
      return false;
    }
    return true;
  }

  maxlenght(lenght: number): boolean {
    return false;
  }

}
