import { Competencia } from './../competencia';
import { Component, OnInit } from '@angular/core';
import { CompetenciaService } from '../competencia.service';
import { Router } from '@angular/router';






@Component({
  selector: 'app-lista-competencias',
  templateUrl: './lista-competencias.component.html',
  styleUrls: ['./lista-competencias.component.css']
})
export class ListaCompetenciasComponent implements OnInit{
  competencias: Competencia[];
  nombreCompetencia: string;

  constructor(private competenciaService: CompetenciaService, private router: Router){ }

  ngOnInit():void{
   this.obtenerCompetencias();
  }

  // me voy s suscribir a todo el listado de competencias
  private obtenerCompetencias(){
    this.competenciaService.obtenerListaDeCompetencias().subscribe(dato => {
      this.competencias = dato;
    });
  }

  eliminarCompetencia(idCompetencia: number){
    this.competenciaService.eliminarCompetencia(idCompetencia).subscribe(dato => {
      this.obtenerCompetencias();
    });
  }

  abrirEditarCompetencia(idCompetencia:number){
    this.router.navigate(['abrirEditar-competencia', idCompetencia]);
  }

  buscarCompetencia() {
    this.competenciaService.buscarCompeNombre(this.nombreCompetencia).subscribe(dato => {
      this.competencias = dato;
    }, error => console.log(error));
  }

  regresar() {
    this.nombreCompetencia = '';
    this.obtenerCompetencias();
  }


  onSubmit(){
    this.buscarCompetencia();
  }

}
