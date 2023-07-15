import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Competencia } from './competencia';
import { Partido } from './partido';

@Injectable({
  providedIn: 'root'
})
export class CompetenciaService {
  // Esta URL obtiene el listado de todos los empleados en el backend
  private baseURL = "http://localhost:8080/api/v1/competencia";
  private urlNombre = "/nombre";

  constructor(private httpClient: HttpClient) { }

  // Con este método obtenemos las competencias
  obtenerListaDeCompetencias(): Observable<Competencia[]>{
    return this.httpClient.get<Competencia[]>(`${this.baseURL}`);
  }

  //Este método sirve para registrar una competencia
  registrarCompetencia(competencia: Competencia): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}`, competencia);
  }

  eliminarCompetencia(idCompetencia: number): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/${idCompetencia}`);
  }

  obtenerCompetenciaPorId(idCompetencia:number): Observable<Competencia>{
    return this.httpClient.get<Competencia>(`${this.baseURL}/${idCompetencia}`);
  }

  actualizarCompetencia(competencia: Competencia): Observable<Object>{
    return this.httpClient.put<Competencia>(`${this.baseURL}`, competencia);
  }

  buscarCompeNombre(nombreCompetencia:string):Observable<Competencia[]>{
    return this.httpClient.get<Competencia[]>(`${this.baseURL}${this.urlNombre}/${nombreCompetencia}`);
  }

}
