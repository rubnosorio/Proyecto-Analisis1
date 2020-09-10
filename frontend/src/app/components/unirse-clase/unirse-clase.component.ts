import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-unirse-clase',
  templateUrl: './unirse-clase.component.html',
  styleUrls: ['./unirse-clase.component.scss']
})
export class UnirseClaseComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  CodigoValido (cod:string): boolean{
    return true;
  }

}
