import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogo-eliminar-examen',
  templateUrl: './dialogo-eliminar-examen.component.html',
  styleUrls: ['./dialogo-eliminar-examen.component.scss']
})
export class DialogoEliminarExamenComponent implements OnInit {

  constructor(public dialogRef: MatDialogRef<DialogoEliminarExamenComponent>) { }

  ngOnInit(): void {
  }

}
