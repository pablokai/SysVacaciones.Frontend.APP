import { Routes } from '@angular/router';
import { EmpleadosComponent } from './pages/empleados/empleados.component';
import { EmpleadosFormComponent } from './pages/empleados-form/empleados-form.component';
import { HomeComponent } from './pages/home/home.component';
import { LayoutComponent } from '../dashboard/layout/layout.component';
import { SolicitudVacacionesComponent } from './pages/solicitud-vacaciones/solicitud-vacaciones.component';

export const routes: Routes = [
    {
            path: '',
            children: [{
                path: 'inicio',
                component: HomeComponent
            },
            {
                path: 'empleados',
                component: EmpleadosComponent,
            },
            {
                path: 'empleados-insertar',
                component:EmpleadosFormComponent
            },
            {
                path: 'solicitud-vacaciones',
                component:SolicitudVacacionesComponent
            },
            { path: '', redirectTo: '/inicio', pathMatch: 'full' }, // Default route
        ]
    }
];

// crear routes para cada submodulo EmpleadosComponent, vacacione etc
// usar loadchildren
