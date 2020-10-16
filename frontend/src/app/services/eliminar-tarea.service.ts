import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarea } from '../models/tarea';
import {HttpHeaders}  from '@angular/common/http';
import {baseURL} from './shared/baseURL';

@Injectable({
  providedIn: 'root'
})
export class EliminarTareaService {

  constructor(private  http:HttpClient) { }

  

  delete_Tarea(tarea: Tarea){
    let options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json',
      }),
      body: {
        id_tarea: tarea.id_tarea
      },
    };
    console.log(options.body.id_tarea);
    return this.http.delete(baseURL+'eliminar_tarea',options);
  }
}
