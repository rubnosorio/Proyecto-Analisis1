import { Injectable } from '@angular/core';
import { baseURL } from '../shared/baseURL';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders}  from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class DarmeBajaService {

  constructor(private http: HttpClient) { }

  darme_de_baja(clase_user:any){
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        id_clase: clase_user.id_clase,
        id_usuario: clase_user.id_usuario
      },
    };
    return this.http.delete(baseURL+'darme_baja',options);
  }
}
