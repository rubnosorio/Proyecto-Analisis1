import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Examen } from '../../models/examen';
import {HttpHeaders}  from '@angular/common/http';
import {baseURL} from '../shared/baseURL';

@Injectable({
  providedIn: 'root'
})
export class EliminarExamenService {

  constructor(private  http:HttpClient) { }

  delete_Examen(examen: Examen){
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        id_examen: examen.id_examen
      },
    };
    console.log(options.body.id_examen);
    return this.http.delete(baseURL+'eliminar_examen',options);
  }

}
