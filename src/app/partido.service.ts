import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Partido } from './partido';

@Injectable({
  providedIn: 'root'
})
export class PartidoService {

  private baseURL = "http://localhost:8080/api/v1/partido";
  private urlNombre = "/nombre";

  constructor(private httpClient : HttpClient) { }

  obtenerListaDePartidos():Observable<Partido[]>{
    return this.httpClient.get<Partido[]>(`${this.baseURL}`)
  }

  obtenerPartidoPorId(idPartido:number): Observable<Partido>{
    return this.httpClient.get<Partido>(`${this.baseURL}/${idPartido}`);
  }

  registrarPartido(partido:Partido): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, partido);
  }

  actualizarPartido(partido:Partido): Observable<Object>{
    return this.httpClient.put<Partido>(`${this.baseURL}`, partido);
  }

  eliminarPartido(idPartido:number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${idPartido}`);
  }
}
