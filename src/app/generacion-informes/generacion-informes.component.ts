import { Component, OnInit } from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import { _ApiService } from '../api.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { ChartOptions, ChartType, ChartDataset } from 'chart.js';
import { NgChartsModule } from 'ng2-charts';
import { ChartConfiguration } from 'chart.js';

@Component({
  selector: 'app-generacion-informes',
  standalone: true,
  imports: [CommonModule, FormsModule, NgChartsModule],
  templateUrl: './generacion-informes.component.html',
  styleUrl: './generacion-informes.component.css'
})
export class GeneracionInformesComponent {
  constructor(private api: _ApiService, private router: Router) { }
  public formularioData = {
    fechaInicial: '',
    fechaFinal: ''
  };

  public barChartLegend = true;
  public barChartPlugins = [];
  public barChartData: ChartConfiguration<'bar'>['data'] = {
    labels: [],
    datasets: [
      { data: [], label: 'Ingresos' },
      { data: [], label: 'Egresos' }
    ]
  };

  public barChartOptions: ChartConfiguration<'bar'>['options'] = {
    responsive: true,
  };

  formatearFecha(fechaApi: string): string {
    const fechaObj = new Date(fechaApi);
    return fechaObj.toISOString().split('T')[0];
  }

  processChartData(data: any[]): void {
    
    const labels: string[] = [];
    const ingresosData: number[] = [];
    const egresosData: number[] = [];
    data.forEach(item => {
      labels.push(this.formatearFecha(item.date));
      if (item.type === 'Ingreso') {
        ingresosData.push(item.amount);
        egresosData.push(0);
      } else {
        ingresosData.push(0);
        egresosData.push(item.amount);
      }
    });

    this.barChartData = {
      labels: labels,
      datasets: [
        { data: ingresosData, label: 'Ingresos' },
        { data: egresosData, label: 'Egresos' }
      ]
    };
  
  }

  public errorDatos: Boolean = false;
  generarInforme(formulario: NgForm): void {
    this.api.getFinancesByDate(this.formularioData.fechaInicial, this.formularioData.fechaFinal)
    .then(response => {
      if(response){
        const data = JSON.parse(response);
        if(!data.transactions.length){
          this.errorDatos = true;
        }else{
          this.errorDatos = false;
          this.processChartData(data.transactions);
        }
        console.log('data', data)
        
      }
    })
    .catch(error => {
      this.errorDatos = true;
      console.error('Error:', error);
    });
  }
}
