import { BrowserModule } from '@angular/platform-browser';
import { CommonModule } from '@angular/common';
import { AppComponent } from './app.component';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { _AuthService } from './auth.service'
import { NgChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
  ],
  providers: [
    _AuthService
  ],
  exports: [],
  imports: [
    CommonModule,
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgChartsModule
  ],
  bootstrap: []
})
export class AppModule { }
