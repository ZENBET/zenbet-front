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
  nombreEquipo: string;

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

  buscarEquipo() {
    this.equipoServicio.buscarEquipoNombre(this.nombreEquipo).subscribe(dato => {
      this.equipos = dato;
    }, error => console.log(error));
  }

  regresar() {
    this.nombreEquipo = '';
    this.ObtenerEquipos();
  }

  onSubmit(){
    this.buscarEquipo();
  }

  eliminarEquipo(idEquipo:number){
    this.equipoServicio.eliminarEquipo(idEquipo).subscribe(dato => {
      console.log(dato);
      this.ObtenerEquipos();
    })
  }

}
