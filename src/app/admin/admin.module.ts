import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { EmpleadosFormComponent } from './pages/empleados-form/empleados-form.component';
import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './pages/home/home.component';
import {VacacionesComponent} from './pages/vacaciones/vacaciones.component'



@NgModule({
  declarations: [
    HomeComponent,
    EmpleadosComponent,
    VacacionesComponent,
  ],
  imports: [
    CommonModule,
    FormsModule, 
    AdminRoutingModule
  ]
})
export class AdminModule { }

