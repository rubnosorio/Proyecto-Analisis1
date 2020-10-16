import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseURL';

@Injectable({
  providedIn: 'root',
})
export class ServiceCrearTareaService {
  constructor(private http: HttpClient) {}

  crear_tarea(tarea): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<any>(baseURL + 'crear_tarea', tarea, httpOptions);
  }
}
