import { Component, OnInit} from '@angular/core';
import { Partido } from '../partido';
import { PartidoService } from '../partido.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-lista-partido',
  templateUrl: './lista-partido.component.html',
  styleUrls: ['./lista-partido.component.css']
})
export class ListaPartidoComponent implements OnInit {

  partidos:Partido[];
  nombrePartido: String;

  constructor(private partidoServicio:PartidoService, private router: Router) {}

  ngOnInit(): void {
    this.ObtenerPartidos();
  }

  private ObtenerPartidos(){
    this.partidoServicio.obtenerListaDePartidos().subscribe(dato =>{
      this.partidos = dato;
    })
  }
}
