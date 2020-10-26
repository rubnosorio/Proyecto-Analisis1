import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseURL';

@Injectable({
  providedIn: 'root'
})
export class VerExamenesEstudianteService {

  constructor(private http:HttpClient) { }

  get_examenes(clase:any){
    return this.http.post(baseURL+'ver_examenes_estudiante',clase);
  } 
}
