import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { baseURL } from '../shared/baseURL';

@Injectable({
  providedIn: 'root'
})
export class CrearPublicacionService {

  constructor(private http: HttpClient) { }

  crear_publicacion() {

  }
}
