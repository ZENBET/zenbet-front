import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaApostadorComponent } from './lista-apostador/lista-apostador.component';

import { HttpClientModule } from '@angular/common/http';
import { RegistrarApostadorComponent } from './registrar-apostador/registrar-apostador.component'
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AbrirEditarApostadorComponent } from './actualizar-apostador/actualizar-apostador.component';
import { DetallesApostadorComponent } from './detalles-apostador/detalles-apostador.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { ListaCompetenciasComponent } from './lista-competencias/lista-competencias.component';
import { RegistrarCompetenciaComponent } from './registrar-competencia/registrar-competencia.component';
import { ActualizarCompetenciaComponent } from './actualizar-competencia/actualizar-competencia.component';
import { ListaEquipoComponent } from './lista-equipo/lista-equipo.component';
import { RegistrarEquipoComponent } from './registrar-equipo/registrar-equipo.component';
import { ActualizarEquipoComponent } from './actualizar-equipo/actualizar-equipo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//nuevo
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatTableModule} from '@angular/material/table';
import {MatSelectModule} from '@angular/material/select';
import {MatMenuModule} from '@angular/material/menu';
import {MatGridListModule} from '@angular/material/grid-list';



@NgModule({
  declarations: [
    AppComponent,
    ListaApostadorComponent,
    RegistrarApostadorComponent,
    AbrirEditarApostadorComponent,
    DetallesApostadorComponent,
    LoginComponent,
    HomeComponent,
    ListaCompetenciasComponent,
    RegistrarCompetenciaComponent,
    ActualizarCompetenciaComponent,
    ListaEquipoComponent,
    RegistrarEquipoComponent,
    ActualizarEquipoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    ReactiveFormsModule,
    MatToolbarModule,
    MatIconModule,
    MatTableModule,
    MatSelectModule,
    MatMenuModule,
    MatGridListModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
