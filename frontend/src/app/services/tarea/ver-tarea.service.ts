import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseURL'

@Injectable({
  providedIn: 'root'
})
export class VerTareaService {

  constructor(private http: HttpClient) { }

  getTasks(idclase: number){
    return this.http.post(baseURL+'ver_tareas',{id_clase: idclase})
  }

}
