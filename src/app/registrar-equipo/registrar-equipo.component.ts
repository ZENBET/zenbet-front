import { Component } from '@angular/core';
import { Equipo } from '../equipo';
import { EquipoService } from '../equipo.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-equipo',
  templateUrl: './registrar-equipo.component.html',
  styleUrls: ['./registrar-equipo.component.css']
})
export class RegistrarEquipoComponent {

  equipo : Equipo = new Equipo();

  constructor(private equipoServicio: EquipoService, private router: Router){

  }

  ngOnInit(): void {

  }

  guardarEquipo(){
    this.equipoServicio.registrarEquipo(this.equipo).subscribe(dato => {
      console.log(dato);
      this.irALaListaEquipos();
    }, error => console.log(error));
  }

  irALaListaEquipos(){
    this.router.navigate(['/equipo']);
  }

  onSubmit(){
    this.guardarEquipo();
  }


}
