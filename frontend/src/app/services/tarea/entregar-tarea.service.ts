import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EntregarTareaService {

  constructor(private http: HttpClient) { }

  sendTask(){
    //consumo
  }
}
