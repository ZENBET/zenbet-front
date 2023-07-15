import { Component } from '@angular/core';
import { Partido } from '../partido';
import { PartidoService } from '../partido.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-partido',
  templateUrl: './registrar-partido.component.html',
  styleUrls: ['./registrar-partido.component.css']
})
export class RegistrarPartidoComponent {

  partido : Partido = new Partido();

  constructor(private partidoServicio:PartidoService, private router:Router){

  }

  ngOnInit(): void {

  }

  guardarPartido(){
    this.partidoServicio.registrarPartido(this.partido).subscribe(dato => {
      console.log(dato);
      this.irAlaListaPartidos();
    }, error => console.log(error));
  }

  irAlaListaPartidos(){
    this.router.navigate(['/partido']);
  }

  onSubmit(){
    this.guardarPartido();
  }

}
