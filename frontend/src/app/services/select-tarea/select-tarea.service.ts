import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from "../shared/baseURL";

@Injectable({
  providedIn: 'root'
})
export class SelectTareaService {

  constructor(private http: HttpClient) { }

  getTareas(id_clase:number, id_estudiante:number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    var info={
      id_clase:id_clase,
      id_usuario:id_estudiante
    }
    return this.http.post<any>(baseURL + 'select_tareas', info, httpOptions);
  }
}
