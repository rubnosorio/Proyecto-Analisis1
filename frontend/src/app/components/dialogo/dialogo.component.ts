import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-dialogo',
  templateUrl: './dialogo.component.html',
  styleUrls: ['./dialogo.component.scss']
})
export class DialogoComponent implements OnInit {
 
  constructor(public dialogRef: MatDialogRef<DialogoComponent>) { }

  ngOnInit(): void {
  }

}
