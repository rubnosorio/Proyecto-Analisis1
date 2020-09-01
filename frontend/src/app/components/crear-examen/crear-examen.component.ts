import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { CrearPreguntaComponent } from '../crear-pregunta/crear-pregunta.component';

@Component({
  selector: 'app-crear-examen',
  templateUrl: './crear-examen.component.html',
  styleUrls: ['./crear-examen.component.scss'],
})
export class CrearExamenComponent implements OnInit {
  constructor(public dialog: MatDialog) {}

  ngOnInit(): void {}

  crearpregunta() {
    const dialogRef = this.dialog.open(CrearPreguntaComponent, {});

    dialogRef.afterClosed().subscribe((result) => {
      console.log(result);
    });
  }
}

