import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaApostadorComponent } from './lista-apostador/lista-apostador.component';
import { RegistrarApostadorComponent } from './registrar-apostador/registrar-apostador.component';
import { AbrirEditarApostadorComponent } from './actualizar-apostador/actualizar-apostador.component';
import { DetallesApostadorComponent } from './detalles-apostador/detalles-apostador.component';

import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';

import { ListaCompetenciasComponent } from './lista-competencias/lista-competencias.component';
import { RegistrarCompetenciaComponent } from './registrar-competencia/registrar-competencia.component';
import { ActualizarCompetenciaComponent } from './actualizar-competencia/actualizar-competencia.component';

const routes: Routes = [{
  path : 'apostador', component: ListaApostadorComponent},
  {path : '', redirectTo: 'apostador', pathMatch: 'full'},
  {path : 'registrar-apostador', component : RegistrarApostadorComponent},
  {path : 'abrirEditar-apostador/:dni', component : AbrirEditarApostadorComponent},
  {path : 'detalles-apostador/:dni', component : DetallesApostadorComponent},
  {path : 'login', component: LoginComponent},
  { path: 'home', component: HomeComponent },
  {path: 'competencias', component: ListaCompetenciasComponent},
  {path: '', redirectTo: 'competencias', pathMatch: 'full'},
  {path: 'registrar-competencia', component: RegistrarCompetenciaComponent},
  {path: 'abrirEditar-competencia/:idCompetencia', component: ActualizarCompetenciaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
