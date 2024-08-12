import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { HomeComponent } from '../../admin/pages/home/home.component';
import { EmpleadosComponent } from '../../admin/pages/empleados/empleados.component';
import { VacacionesComponent } from '../../admin/pages/vacaciones/vacaciones.component';


@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {

}
