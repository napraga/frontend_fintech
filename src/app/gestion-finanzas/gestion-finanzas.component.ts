import { Component, OnInit } from '@angular/core';
import { _ApiService } from '../api.service';
import {CommonModule} from '@angular/common';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import {FormsModule} from '@angular/forms';

@Component({
  selector: 'app-gestion-finanzas',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './gestion-finanzas.component.html',
  styleUrl: './gestion-finanzas.component.css',
})
export class GestionFinanzasComponent implements OnInit {

  constructor(private api: _ApiService, private router: Router) { }

  public data: any[] = [];
  public selectedTab: string = 'Transacciones';
  public formularioData = {
    description: '',
    amount: 0,
    date: '',
    type: 'Egreso',
  };
  public errorGuardar: Boolean = false;
  ngOnInit(): void {
    this.loadFinances();
  }

  loadFinances(){
    this.api.getFinances()
    .then(response => {
      if(response){
        this.data = JSON.parse(response)
      }
    })
    .catch(error => {
      this.router.navigate(['/ingreso']);
      console.error('Error:', error);
    });
  }

  enviarDatos(formulario: NgForm): void {
    if(this.formularioData.description && 
       this.formularioData.amount && 
       this.formularioData.date && 
       this.formularioData.type ){

        this.api.saveFinances(this.formularioData)
        .then(response => {
          if(response){
            // this.data = JSON.parse(response)
            this.loadFinances();
            this.formularioData = {
              description: '',
              amount: 0,
              date: '',
              type: '',
            };
            this.selectedTab = "Transacciones"
            this.errorGuardar = false;
          }
        })
        .catch(error => {
          this.router.navigate(['/ingreso']);
          console.error('Error:', error);
          this.errorGuardar = true;
        });

       }else{
        this.errorGuardar = true;
       }
  }

}
