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

  registrarEquipo(equipo:Equipo): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, equipo);
  }

  actualizarEquipo(equipo:Equipo): Observable<Object>{
    return this.httpClient.put<Equipo>(`${this.baseURL}`, equipo);
  }

  obtenerEquipoPorId(idEquipo:number): Observable<Equipo>{
    return this.httpClient.get<Equipo>(`${this.baseURL}/${idEquipo}`);
  }

}
