import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { VacacionesComponent  } from './pages/vacaciones/vacaciones.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'inicio',
    component: HomeComponent
  },
  {
    path: 'empleados',
    component: EmpleadosComponent
  },
  {
    path: 'vacaciones',
    component: VacacionesComponent
  },
  {
    path: 'vacaciones-form',
    component: VacacionesComponent
  }
];

@NgModule({
<<<<<<< HEAD
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
=======
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)//setea enrutamiento para modulos hijo, setea propio enrutamiento
  ], 
  exports:[
    RouterModule
  ]
>>>>>>> f9a06a4d05378bb6b8ef0a775c37e9635484372d
})
export class AdminRoutingModule { }
