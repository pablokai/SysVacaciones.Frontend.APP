import { Component } from '@angular/core';
import {Router} from '@angular/router'

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {

  constructor(private router : Router){}

  redirectEmpleadosFormInsert () : void{
    this.router.navigate(['/empleados-insertar'], 
      {
        state: {
          proceso: 0,
        }
      })
  }

  redirectEmpleadosFormEdit () : void{
    this.router.navigate(['/empleados-insertar'],{
      state: {
        proceso: 1,
        id: 1
      }
    })
  }
}
