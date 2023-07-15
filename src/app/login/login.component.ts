import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormBuilder } from '@angular/forms';

//import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  dni: string;
  contrasena: string;

  ngOnInit(): void {
    document.getElementById("msjError").style.visibility = "hidden";
  }

  constructor(private http: HttpClient, private router: Router/*, private snack: MatSnackBar*/) { }

  login() {
    const url = 'http://localhost:8080/api/v1/apostador/login'; // URL backend

    const apostador = {
      dni: this.dni,
      contrasena: this.contrasena
    };


    localStorage.setItem('dniUsuario', this.dni); // Guarda el DNI en el localStorage

    this.http.post(url, apostador).subscribe(
      (response: any) => {
        console.log('Inicio de sesión exitoso:', response);
        // redireccionar
        this.router.navigate(['/home']);

      },
      (error) => {
        console.error('Error en el inicio de sesión:', error);
        // Mostrar mensaje
        document.getElementById("msjError").style.visibility = "visible";
      }
    );
  }


}
