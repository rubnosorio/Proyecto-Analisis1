import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseURL'
import { EntregarTarea } from 'src/app/models/entregar-tarea';

@Injectable({
  providedIn: 'root'
})
export class EntregarTareaService {

  constructor(private http: HttpClient) { }

  sendTask(task: EntregarTarea){
    return this.http.post(baseURL+'entregar_tarea',task)
  }
}
