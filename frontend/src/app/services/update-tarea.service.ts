import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Tarea } from '../models/tarea';

@Injectable({
  providedIn: 'root'
})
export class UpdateTareaService {

  constructor(private  http:HttpClient) { }

  update_Tarea(tarea: Tarea){
    return this.http.post('http://localhost:3000/update_tarea',tarea);
  }
}
