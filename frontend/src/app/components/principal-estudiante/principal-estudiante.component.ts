import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-principal-estudiante',
  templateUrl: './principal-estudiante.component.html',
  styleUrls: ['./principal-estudiante.component.scss']
})
export class PrincipalEstudianteComponent implements OnInit {

  constructor(private router: Router) {
    if(!sessionStorage.getItem("id_usuario")){
      this.router.navigate(['/login']);
    }
  }

  ngOnInit(): void {
  }

  redirect(url) {
    this.router.navigate([url]);
  }

}
