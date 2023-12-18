import { Routes } from '@angular/router';
import { FormularioIngresoComponent } from './formulario-ingreso/formulario-ingreso.component';
import { GestionFinanzasComponent } from './gestion-finanzas/gestion-finanzas.component';
import { CreacionPresupuestosComponent } from './creacion-presupuestos/creacion-presupuestos.component';
import { GeneracionInformesComponent } from './generacion-informes/generacion-informes.component';

export const routes: Routes = [
    { path: '', redirectTo: '/ingreso', pathMatch: 'full' },
    { path: 'ingreso', component: FormularioIngresoComponent },
    { path: 'gestion-finanzas', component: GestionFinanzasComponent },
    { path: 'creacion-presupuestos', component: CreacionPresupuestosComponent },
    { path: 'generacion-informes', component: GeneracionInformesComponent }
];
