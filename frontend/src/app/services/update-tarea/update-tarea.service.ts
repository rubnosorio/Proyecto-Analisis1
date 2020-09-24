import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { baseURL } from '../shared/baseURL';
import { Tarea } from '../../models/tarea';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UpdateTareaService {

  constructor(private  http:HttpClient) { }

  update_Tarea(tarea: Tarea){
    return this.http.post(baseURL+'update_tarea',tarea);
  }

  getMockTareas():Observable<any[]> {
    return this.http.get<any[]>('assets/fakedb/tareasfake.json');
  }
}
