import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import {baseURL} from '../shared/baseURL';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable({
  providedIn: 'root'
})
export class UnirseAClaseService {

  constructor(private http: HttpClient) { }

  unirse_clase(servicio:any){

    return this.http.post(baseURL+'unirse_a_clase',servicio,httpOptions);
  }

  PostFakeServiceDB():Observable<any[]>{
    return this.http.get<any[]>('assets/fakedb/ClaseFakeTable.json');
  }
}


