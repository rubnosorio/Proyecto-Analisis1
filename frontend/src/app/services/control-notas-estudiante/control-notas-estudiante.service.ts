import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseURL';

@Injectable({
  providedIn: 'root'
})
export class ControlNotasEstudianteService {

  constructor(private  http:HttpClient) { }

  get_tareas(data: any){
    return this.http.post(baseURL+'get_tareas',data); 
  }
}
