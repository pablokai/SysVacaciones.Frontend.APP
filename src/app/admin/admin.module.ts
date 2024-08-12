import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { EmpleadosFormComponent } from './pages/empleados-form/empleados-form.component';
import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { VacacionesComponent } from './pages/vacaciones/vacaciones.component';
import { VacacionesFormComponent } from './pages/vacaciones-from/vacaciones-from.component';




@NgModule({
  declarations: [
    HomeComponent,
    EmpleadosComponent,
    VacacionesComponent,
    VacacionesFormComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    AdminRoutingModule
  ]
})
export class AdminModule { }


