import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseURL';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerExamenesEstudianteService {

  constructor(private http:HttpClient) { }

  getMockClases():Observable<any[]> {
    return this.http.get<any[]>('assets/fakedb/ClaseFakeTable.json');
  }

  getMockExamenes():Observable<any[]> {
    return this.http.get<any[]>('assets/fakedb/ExamenesFake.json');
  }

  get_examenes(clase:any){
    return this.http.post(baseURL+'ver_examenes_estudiante',clase);
  } 
}
