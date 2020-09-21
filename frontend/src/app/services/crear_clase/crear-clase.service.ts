import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {HttpHeaders}  from '@angular/common/http';
import { Observable } from 'rxjs';
import {baseURL} from '../shared/baseURL';

@Injectable({
  providedIn: 'root'
})
export class CrearClaseService {

  constructor(private http: HttpClient) { }

  CrearClase(NombreClase): Observable<any> {

    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<any>(baseURL + 'crear_clase', {nombre_clase: NombreClase,id_usuario: 1} , httpOptions);
  }
}
