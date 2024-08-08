import { Component } from '@angular/core';
import {Router} from '@angular/router'
import { EmpleadosService } from '../../../services/empleados.service';
import { Empleados } from '../../../interfaces/empleados';

@Component({
  selector: 'app-empleados',
  templateUrl: './empleados.component.html',
  styleUrl: './empleados.component.css'
})
export class EmpleadosComponent {

  listaEmpleados : Empleados[] = [];
  constructor(private router : Router, private empleadosService : EmpleadosService){

  }

  ngOnInit(): void {

     this.loadEmpleados();
  }

  loadEmpleados () : void {
    //el observable nos da subscribe para consumir el metodo, recibe response  y lo mapea a nuestro objeto, es similar al promises de js
    this.empleadosService.listarEmpleados().subscribe( (response) =>{ 
      this.listaEmpleados = response;
    });

    console.log(this.listaEmpleados);
  }

  redirectEmpleadosFormInsert () : void{
    this.router.navigate(['/empleados-insertar'], 
      {
        state: {
          proceso: 0,
        }
      })
  }

  redirectEmpleadosFormEdit (empleado : Empleados) : void{
    this.router.navigate(['/empleados-insertar'],{
      state: {
        proceso: 1,
        empleado: empleado
      }
    })
  }

  deleteEmpleados(id : string) : void{
    alert('voy a borrar ' + id);
  }

}
