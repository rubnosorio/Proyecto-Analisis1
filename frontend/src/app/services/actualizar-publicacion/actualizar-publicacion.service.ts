import { Injectable } from '@angular/core';
import { baseURL } from '../shared/baseURL';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ActualizarPublicacionService {

  constructor(private http: HttpClient) { }

  getbaseURL(): any{
    return baseURL
  }

  update(publicacion: any): any{
    return this.http.post(baseURL+'actualizar-publicacion',publicacion)
  }
}
