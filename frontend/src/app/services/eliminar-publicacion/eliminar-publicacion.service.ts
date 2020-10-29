import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {baseURL} from '../shared/baseURL';
import {HttpHeaders}  from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EliminarPublicacionService {

  constructor(private  http:HttpClient) { }

  eliminar_publicacion(publicacion:any){
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        id_publicacion: publicacion.id_publicacion
      },
    };
    return this.http.delete(baseURL+'eliminar_publicacion',options);
  }
}
