import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { _ApiService } from '../api.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-creacion-presupuestos',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './creacion-presupuestos.component.html',
  styleUrl: './creacion-presupuestos.component.css'
})
export class CreacionPresupuestosComponent implements OnInit {
  constructor(private api: _ApiService, private router: Router) { }
  public formularioData = {
    fechaInicial: '',
    fechaFinal: '',
    amount: 0,
    nombre: '',
  };
  public data: any[] = [];

  public errorGuardar: Boolean = false;
  
  funcionesEjecutadas: boolean[] = [];
  resultadosFunciones: string[] = [];


  ngOnInit(): void {
    this.loadPresupuestos();
  }
  borrarPresupuesto(id: string): any{
    if(confirm('Esta seguro que desea borrar este presupuesto?')){
      this.api.deleteBudget(id)
    .then(response => {
      if(response){
        this.loadPresupuestos();
      }
    })
    .catch(error => {
      return "No hay datos."
      console.error('Error:', error);
    });
    }
    
  }
  verEstado(fechaInicial: string, fechaFinal: string, index: number){

    this.api.getFinancesByDate(fechaInicial, fechaFinal)
    .then(response => {
      if(response){
        const data = JSON.parse(response).totals;
        this.resultadosFunciones[index] = data.totalIngresos +'/'+data.totalEgresos;
        this.funcionesEjecutadas[index] = true;
      }
    })
    .catch(error => {
      return "No hay datos."
      console.error('Error:', error);
    });
  }
  

  formatearFecha(fechaApi: string): string {
    const fechaObj = new Date(fechaApi);
    return fechaObj.toISOString().split('T')[0];
  }

  loadPresupuestos(){
    this.api.getBudget()
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

  guardarPresupuesto(formulario: NgForm): void {
    if(this.formularioData.fechaInicial && 
       this.formularioData.amount && 
       this.formularioData.fechaFinal && 
       this.formularioData.nombre ){

        this.api.saveBudget(this.formularioData)
        .then(response => {
          if(response){
            // this.data = JSON.parse(response)
            this.loadPresupuestos();
            this.formularioData = {
              fechaInicial: '',
              fechaFinal: '',
              amount: 0,
              nombre: '',
            };
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
