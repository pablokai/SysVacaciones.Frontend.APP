<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
=======
import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
>>>>>>> f9a06a4d05378bb6b8ef0a775c37e9635484372d
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { EmpleadosFormComponent } from './pages/empleados-form/empleados-form.component';
import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './pages/home/home.component';
<<<<<<< HEAD
import {VacacionesComponent} from './pages/vacaciones/vacaciones.component'


=======
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';
>>>>>>> f9a06a4d05378bb6b8ef0a775c37e9635484372d

import localeEs from '@angular/common/locales/es-AR'

registerLocaleData(localeEs);
@NgModule({
  declarations: [
    HomeComponent,
    EmpleadosComponent,
    VacacionesComponent,
  ],
  imports: [
    CommonModule,
<<<<<<< HEAD
    FormsModule, 
    AdminRoutingModule
  ]
=======
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers : [ {provide: LOCALE_ID, useValue: 'es-AR'}]
>>>>>>> f9a06a4d05378bb6b8ef0a775c37e9635484372d
})
export class AdminModule { }

