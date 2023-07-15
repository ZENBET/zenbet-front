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
}
