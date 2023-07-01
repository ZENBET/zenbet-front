import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Equipo } from './equipo';

@Injectable({
  providedIn: 'root'
})
export class EquipoService {

  private baseURL = "http://localhost:8080/api/v1/equipo";

  constructor(private httpClient : HttpClient) { }

  obtenerListaDeEquipos():Observable<Equipo[]>{
    return this.httpClient.get<Equipo[]>(`${this.baseURL}`);
  }

}
