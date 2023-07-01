import { Component, OnInit } from '@angular/core';
import { EquipoService } from '../equipo.service';
import { Equipo } from '../equipo';

import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-equipo',
  templateUrl: './actualizar-equipo.component.html',
  styleUrls: ['./actualizar-equipo.component.css']
})
export class ActualizarEquipoComponent implements OnInit{

  idEquipo:number;
  equipo:Equipo = new Equipo();
  constructor(private equipoService:EquipoService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.idEquipo = this.route.snapshot.params['idEquipo'];
    this.equipoService.obtenerEquipoPorId(this.idEquipo).subscribe(dato =>{
      this.equipo = dato;
    },error => console.log(error));
  }

  irAlaListaEquipo(){
    this.router.navigate(['/equipo']);
  }

  onSubmit(){
    this.equipoService.actualizarEquipo(this.equipo).subscribe(dato => {
      this.irAlaListaEquipo();
    },error => console.log(error));
  }

}
