import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UnirseAClaseService {

  constructor(private http: HttpClient) { }

  PostFakeServiceDB():Observable<any[]>{
    return this.http.get<any[]>('assets/fakedb/ClaseFakeTable.json');
  }
}


