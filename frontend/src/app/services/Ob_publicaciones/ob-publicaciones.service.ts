import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseURL'

@Injectable({
  providedIn: 'root'
})
export class ObPublicacionesService {

  constructor(private http: HttpClient) { }

  getPublicaciones(idUsuario: number,idClase:number){
    return this.http.post(baseURL+'ver_publicaciones',{Id_Usuario: idUsuario,Id_Clase:idClase})
  }
  getPublicacionesEstu(idClase:number){
    return this.http.post(baseURL+'ver_publicacionesE',{Id_Clase:idClase})
  }
}
