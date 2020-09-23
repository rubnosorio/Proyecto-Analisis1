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

  /*getReservaciones():Observable<NotaEstudiante[]>{
    return this.http.get<NotaEstudiante[]>(baseURL+'ver_reservaciones');
  }*/

  getNotasEstudiantes(id_clase:number): Observable<NotaEstudiante[]> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<NotaEstudiante[]>(baseURL + 'nota_estudiantes', id_clase, httpOptions);
  }

}
