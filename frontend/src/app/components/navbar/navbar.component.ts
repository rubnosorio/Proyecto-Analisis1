import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
import {MediaMatcher} from '@angular/cdk/layout';
import {ChangeDetectorRef, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  mobileQuery: MediaQueryList;
  private _mobileQueryListener: () => void;
  public fillerNav = [
    {name:"Iniciar sesión",route:"/login",icon:"login"},
    {name:"Mis notas",route:"/control_notas_estudiante",icon:"insert_drive_file"},
    {name:"Mis tareas",route:"/entregar-tarea",icon:"assignment"},
  ];

  constructor(changeDetectorRef: ChangeDetectorRef, media: MediaMatcher) {
    this.mobileQuery = media.matchMedia('(max-width: 600px)');
    this._mobileQueryListener = () => changeDetectorRef.detectChanges();
    this.mobileQuery.addListener(this._mobileQueryListener);
    sessionStorage.setItem("menuPrincipal",JSON.stringify(this.fillerNav));
  }

  ngOnInit(): void {
  }
  shouldRun = true;

  ngOnDestroy(): void {
    this.mobileQuery.removeListener(this._mobileQueryListener);
  }
}
