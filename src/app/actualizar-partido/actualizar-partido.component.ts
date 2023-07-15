import { Component, OnInit } from '@angular/core';
import { PartidoService } from '../partido.service';
import { Partido } from '../partido';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-actualizar-partido',
  templateUrl: './actualizar-partido.component.html',
  styleUrls: ['./actualizar-partido.component.css']
})
export class ActualizarPartidoComponent implements OnInit{

  idPartido:number;
  partido:Partido = new Partido();
  constructor(private partidoService:PartidoService,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {
    this.idPartido = this.route.snapshot.params['idPartido'];
    this.partidoService.obtenerPartidoPorId(this.idPartido).subscribe(dato =>{
      this.partido = dato;
    },error => console.log(error));
  }

  irAlaListaPartido(){
    this.router.navigate(['/partido']);
  }

  onSubmit(){
    this.partidoService.actualizarPartido(this.partido).subscribe(dato => {
      this.irAlaListaPartido();
    }, error => console.log(error));
  }
}
