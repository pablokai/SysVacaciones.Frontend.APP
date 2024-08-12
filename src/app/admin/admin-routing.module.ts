import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { VacacionesComponent } from './pages/vacaciones/vacaciones.component';
import { VacacionesFormComponent } from './pages/vacaciones-from/vacaciones-from.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'empleados', component: EmpleadosComponent },
  { path: 'vacaciones', component: VacacionesComponent },
  { path: 'vacaciones-form', component: VacacionesFormComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
