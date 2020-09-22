import { Injectable } from '@angular/core';
import { baseURL } from '../shared/baseURL';

@Injectable({
  providedIn: 'root'
})
export class CrearUsuarioService {

  constructor() { }

  getbaseURL(): any{
    return baseURL
  }
}
