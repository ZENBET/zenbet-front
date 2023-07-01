import { Router } from '@angular/router';
import { CompetenciaService } from '../competencia.service';
import { Competencia } from './../competencia';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registrar-competencia',
  templateUrl: './registrar-competencia.component.html',
  styleUrls: ['./registrar-competencia.component.css']
})
export class RegistrarCompetenciaComponent implements OnInit{

  competencia: Competencia = new Competencia();
  constructor(private competenciaServicio: CompetenciaService, private router: Router){ }

  ngOnInit(): void {

    console.log(this.competencia);
  }

  guardarCompetencia(){
    this.competenciaServicio.registrarCompetencia(this.competencia).subscribe(dato =>{
      console.log(dato);
      this.irAListaDeCompetencias();
    }, error => console.log(error));
  }

  irAListaDeCompetencias(){
    this.router.navigate(['/competencias']);
  }
  onSubmit(){
    this.guardarCompetencia();
  }

}
