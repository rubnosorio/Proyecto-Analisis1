import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-resolver-examen',
  templateUrl: './resolver-examen.component.html',
  styleUrls: ['./resolver-examen.component.scss'],
})
export class ResolverExamenComponent implements OnInit {
  indexactual = 0;

  examen: any;

  constructor() {}

  ngOnInit(): void {}

  obtenerexamen(id: number): any {}

  esultimo(): Boolean { return null; }

  calificar(): Number { return -1; }

  siguiente(): void {}
}
