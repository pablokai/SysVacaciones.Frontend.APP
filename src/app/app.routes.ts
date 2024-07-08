import { Routes } from '@angular/router';
import { HomeComponent } from './admin/pages/home/home.component';
import { EmpleadosComponent } from './admin/pages/empleados/empleados.component';

export const routes: Routes = [
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
];
