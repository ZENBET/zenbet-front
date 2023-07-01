import { Component, OnInit } from '@angular/core';
import { Competencia } from '../competencia';
import { CompetenciaService } from '../competencia.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-competencia',
  templateUrl: './actualizar-competencia.component.html',
  styleUrls: ['./actualizar-competencia.component.css']
})
export class ActualizarCompetenciaComponent implements OnInit{

  idCompetencia:number;
  competencia: Competencia = new Competencia();
  constructor(private competenciaService: CompetenciaService, private router: Router, private route: ActivatedRoute){ }

  ngOnInit(): void {
    this.idCompetencia = this.route.snapshot.params['idCompetencia'];
    this.competenciaService.obtenerCompetenciaPorId(this.idCompetencia).subscribe(dato =>{
      this.competencia = dato;
    }, error => console.log(error));
  }

  irAlaListaCompetencia(){
    this.router.navigate(['/competencias']);
  }

  onSumbit(){
    this.competenciaService.actualizarCompetencia(this.competencia).subscribe(dato =>{
      this.irAlaListaCompetencia();
    }, error => console.log(error));
  }

}
