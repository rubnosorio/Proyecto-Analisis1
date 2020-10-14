import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseURL'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VistaCursosPofesorService {

  constructor(private http: HttpClient) { }

  getClases(idUsuario: number){
    return this.http.post(baseURL+'ver_cursosp',{id_usuario: idUsuario})
  }

  getFakeClasesDB():Observable<any[]>{
    return this.http.get<any[]>('assets/fakedb/ClaseFakeTable.json');
  }
}
