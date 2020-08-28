import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class VerTareaService {

  readonly URL_API = "http://localhost:3000/"

  constructor(private http: HttpClient) { }

  getTasks(idclase: number){
    return this.http.post(this.URL_API+'ver_tareas',{id_clase: idclase})
  }

}
