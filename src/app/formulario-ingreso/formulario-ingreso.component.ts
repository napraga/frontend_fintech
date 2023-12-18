import { Component, OnInit } from '@angular/core';
import { _AuthService } from '../auth.service';
import { Router } from '@angular/router';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-formulario-ingreso',
  templateUrl: './formulario-ingreso.component.html',
  styleUrl: './formulario-ingreso.component.css',
  imports: [CommonModule, FormsModule],
})

export class FormularioIngresoComponent implements OnInit {
  public username : string = '';
  public password : string = '';
  public errorlogin : Boolean = false;

  ngOnInit(): void {
  }
  constructor(private authServ: _AuthService, private router: Router) {}

  login(): void {
    const data = { username: this.username, password: this.password };

    this.authServ.login(data)
      .then(response => {
        if(response){
          this.errorlogin = false;
          localStorage.setItem('Bearer', JSON.parse(response).token);
          this.router.navigate(['/gestion-finanzas']);
        }
      })
      .catch(error => {
        this.errorlogin = true;
        console.error('Error:', error);
      });
  }
}
