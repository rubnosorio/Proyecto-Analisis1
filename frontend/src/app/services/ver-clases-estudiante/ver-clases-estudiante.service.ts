import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseURL';

@Injectable({
  providedIn: 'root'
})
export class VerClasesEstudianteService {

  constructor(private  http:HttpClient) { }

  ObtenerClases(user:any){
    return this.http.post(baseURL+'get_clases',user); 
  }
}
