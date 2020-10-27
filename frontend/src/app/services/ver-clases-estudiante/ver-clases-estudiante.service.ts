import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseURL';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VerClasesEstudianteService {

  constructor(private  http:HttpClient) { }

  getMockClases():Observable<any[]> {
    return this.http.get<any[]>('assets/fakedb/ClaseFakeTable.json');
  }
  
  ObtenerClases(user:any){
    return this.http.post(baseURL+'get_clases',user); 
  }
}
