import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {baseURL} from '../shared/baseURL';

@Injectable({
  providedIn: 'root'
})
export class EliminarPublicacionService {

  constructor(private  http:HttpClient) { }

  eliminar_publicacion(publicacion:any){
    return this.http.delete(baseURL+'eliminar_publicacion',publicacion);
  }
}
