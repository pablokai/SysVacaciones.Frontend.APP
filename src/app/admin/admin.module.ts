import { NgModule, LOCALE_ID } from '@angular/core';
import { CommonModule, registerLocaleData } from '@angular/common';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { EmpleadosFormComponent } from './pages/empleados-form/empleados-form.component';
import { AdminRoutingModule } from './admin-routing.module';
import { HomeComponent } from './pages/home/home.component';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule } from '@angular/forms';

import localeEs from '@angular/common/locales/es-AR'

registerLocaleData(localeEs);
@NgModule({
  declarations: [EmpleadosComponent, HomeComponent, EmpleadosFormComponent],
  imports: [
    CommonModule,
    AdminRoutingModule,
    SharedModule,
    ReactiveFormsModule
  ],
  providers : [ {provide: LOCALE_ID, useValue: 'es-AR'}]
})
export class AdminModule{ }
