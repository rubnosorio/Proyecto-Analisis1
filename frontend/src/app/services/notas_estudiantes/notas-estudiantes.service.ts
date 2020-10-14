import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseURL';
import { NotaEstudiante } from "../../models/nota-estudiante";

@Injectable({
  providedIn: 'root'
})
export class NotasEstudiantesService {

  constructor(private http: HttpClient) { }

  getNotasEstudiantes(id_clase:number): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    var id_Clase={
      id_clase:id_clase
    }
    return this.http.post<any>(baseURL + 'nota_estudiantes', id_Clase, httpOptions);
  }

}
