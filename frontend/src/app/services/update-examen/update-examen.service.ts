import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseURL';
import { Examen } from '../../models/examen';

@Injectable({
  providedIn: 'root'
})
export class UpdateExamenService {

  constructor(private  http:HttpClient) { }

  update_examen(examen: Examen){
    return this.http.post(baseURL+'update_examen',examen); 
  }
}
