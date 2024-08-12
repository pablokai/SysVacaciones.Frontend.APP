import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({

  selector: 'app-vacaciones-form',
  templateUrl: './vacaciones-from.component.html',
  styleUrls: ['./vacaciones-from.component.css']
})

export class VacacionesFormComponent implements OnInit {
  cedula: string = '';
  empleado: any = null;
  diasSolicitados: number = 0;
  mensaje: string = '';

  empleados = [
    { cedula: '123', nombre: 'Juan Pérez', diasDisponibles: 10 },
    { cedula: '456', nombre: 'María Gómez', diasDisponibles: 8 }
  ];

  constructor() {}

  ngOnInit(): void {}

  buscarEmpleado() {
    this.empleado = this.empleados.find(emp => emp.cedula === this.cedula);
    if (!this.empleado) {
      this.mensaje = 'Empleado no encontrado';
    } else {
      this.mensaje = '';
    }
  }

  onSubmit() {
    if (this.diasSolicitados <= this.empleado.diasDisponibles) {
      this.empleado.diasDisponibles -= this.diasSolicitados;
      this.mensaje = 'Vacaciones solicitadas exitosamente';
    } else {
      this.mensaje = 'No se pudo hacer la solicitud de las vacaciones, revisar información ingresada';
    }
  }
}
