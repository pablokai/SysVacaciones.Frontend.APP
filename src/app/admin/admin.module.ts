import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { EmpleadosFormComponent } from './pages/empleados-form/empleados-form.component';
import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [EmpleadosComponent, HomeComponent, EmpleadosFormComponent],
  imports: [
    CommonModule,
    AdminRoutingModule
  ]
})
export class AdminModule{ }
