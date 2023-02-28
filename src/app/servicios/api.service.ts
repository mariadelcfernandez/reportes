import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { environment } from 'src/environments/environment';
import { Observable } from "rxjs";
import { Detencion } from '../modelos/detencion.model';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private httpClient: HttpClient) { }
 
  getDetenciones(): Observable<Detencion[]>{
    return this.httpClient.get<Detencion[]>(`${environment.baseURL}detenciones.json`);
  }
  
}