import { Component, OnInit} from '@angular/core';
import { Equipo } from '../equipo';
import { EquipoService } from '../equipo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-equipo',
  templateUrl: './lista-equipo.component.html',
  styleUrls: ['./lista-equipo.component.css']
})
export class ListaEquipoComponent implements OnInit{

  equipos:Equipo[];

  constructor(private equipoServicio:EquipoService, private router: Router) {}

  ngOnInit(): void{
    this.ObtenerEquipos();
  }

  private ObtenerEquipos(){
    this.equipoServicio.obtenerListaDeEquipos().subscribe(dato =>{
      this.equipos = dato;
    })
  }

  abrirEditarEquipo(idEquipo:number){
    this.router.navigate(['abrirEditar-equipo', idEquipo]);
  }

}
