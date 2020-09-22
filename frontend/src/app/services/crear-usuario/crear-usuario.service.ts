import { Injectable } from '@angular/core';
import { baseURL } from '../shared/baseURL';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CrearUsuarioService {

  constructor(private http: HttpClient) { }

  getbaseURL(): any{
    return baseURL
  }

  postUser(user: any): any{
    return this.http.post(baseURL+'crear-usuario',user)
  }
}
