import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { baseURL } from '../shared/baseURL';

@Injectable({
  providedIn: 'root'
})
export class RegistrarNotaExamenService {

  constructor(private http: HttpClient) { }
  registrar_nota_examen(infoexamen): Observable<any> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
    };
    return this.http.post<any>(baseURL + 'registrar_nota_examen', infoexamen, httpOptions);
  }
}
