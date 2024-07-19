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
  mockdata =  [
    {
      "cedula": "12345678",
      "name": "John Doe",
      "startDate": "2022-01-15",
      "role": "Developer",
      "state": "Activo"
    },
    {
      "cedula": "87654321",
      "name": "Jane Smith",
      "startDate": "2021-06-01",
      "role": "Project Manager",
      "state": "Activo"
    },
    {
      "cedula": "23456789",
      "name": "Alice Johnson",
      "startDate": "2023-03-20",
      "role": "Designer",
      "state": "Inactivo"
    },
    {
      "cedula": "98765432",
      "name": "Bob Brown",
      "startDate": "2019-11-30",
      "role": "QA Engineer",
      "state": "Activo"
    },
    {
      "cedula": "34567890",
      "name": "Charlie Davis",
      "startDate": "2020-08-10",
      "role": "Scrum Master",
      "state": "Inactivo"
    }
  ];
  ngOnInit(): void {

     
  }

  loadEmpleados () : void {
    //el observable nos da subscribe para consumir el metodo, recibe response  y lo mapea a nuestro objeto, es similar al promises de js
    this.empleadosService.listarEmpleados().subscribe( (response) =>{ 
      this.listaEmpleados = response;
    });
  }

  redirectEmpleadosFormInsert () : void{
    this.router.navigate(['/empleados-insertar'], 
      {
        state: {
          proceso: 0,
        }
      })
  }

  redirectEmpleadosFormEdit (idEmpleado : string) : void{
    this.router.navigate(['/empleados-insertar'],{
      state: {
        proceso: 1,
        id: idEmpleado
      }
    })
  }

  deleteEmpleados(id : string) : void{
    alert('voy a borrar ' + id);
  }

}
