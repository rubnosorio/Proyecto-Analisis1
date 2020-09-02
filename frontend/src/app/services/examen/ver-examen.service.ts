import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseURL'

@Injectable({
  providedIn: 'root'
})
export class VerExamenService {

  constructor(private http: HttpClient) { }

  gets(idclase: number){
    return this.http.post(baseURL+'ver_examenes',{id_clase: idclase})
  }

}
