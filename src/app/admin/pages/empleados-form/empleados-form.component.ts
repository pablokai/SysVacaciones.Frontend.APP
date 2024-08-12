import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EmpleadosService } from '../../../services/empleados.service';
import { Empleados } from '../../../interfaces/empleados';
import { formatDate } from '@angular/common';
import { Puestos } from '../../../interfaces/puestos';


@Component({
  selector: 'app-empleados-form',
  templateUrl: './empleados-form.component.html',
  styleUrl: './empleados-form.component.css'
})
export class EmpleadosFormComponent {

  public proceso : any ;
  public empleado : Empleados= {
    id : 0,
    cedula : '',
    primerNombre : '',
    segundoNombre : '',
    primerApellido : '',
    segundoApellido : '',
    direccion : '',
    telefono : '',
    fechaNacimiento : new Date,
    correoElectronico : '',
    fechaIngreso : new Date,
    puesto : '',
    salario : 0,
    estado : ''
  };
  public titulo : string  = '';
  public btnTexto : string = '';
  public formGroup: FormGroup = this.formBuilder.group({});
  public listaPuestos : Puestos[] = [];
  public disabled : boolean = true;

  constructor
  (
    private router : Router, 
    private route : ActivatedRoute, 
    private empleadosService : EmpleadosService, 
    private formBuilder :  FormBuilder
  )
  {
  } //no se igualan properties


  ngOnInit(): void {
   
    const response : any = history.state;

    this.proceso = response['proceso'];  
    this.empleado = this.proceso == 1 ?  response['empleado'] : '' ;

    this.titulo = this.proceso===0 ? 'Registro de Empleados' : 'Edición de Empleados';
    this.btnTexto = this.proceso===0 ? 'Insertar' : 'Editar';
    this.loadPuestos();
    console.log(this.empleado)
    if(this.proceso === 0){
      this.formGroup = this.formBuilder.group({
        cedula: ['', Validators.required],
        correoElectronico: ['', Validators.required],
        direccion: ['', Validators.required],
        fechaIngreso: ['', Validators.required],
        fechaNacimiento: ['', Validators.required],
        primerApellido: ['', Validators.required],
        primerNombre: ['', Validators.required],
        puesto: ['', Validators.required],
        salario: [''],
        segundoApellido: [''],
        segundoNombre: [''],
        telefono: ['', Validators.required],
        estado: [{value : 'Activo', disabled:true }, Validators.required,],
      });
    }else{
      this.formGroup = this.formBuilder.group({
        id : [this.empleado.id],
        cedula: [ {value : this.empleado.cedula, disabled:true}, Validators.required],
        correoElectronico: [this.empleado.correoElectronico, Validators.required],
        direccion: [ this.empleado.direccion, Validators.required],
        estado: [this.empleado.estado, Validators.required],
        fechaIngreso: [ {value : formatDate(this.empleado.fechaIngreso, 'yyyy-MM-dd', 'es-AR' ), disabled:true}, Validators.required],
        fechaNacimiento: [formatDate(this.empleado.fechaNacimiento, 'yyyy-MM-dd', 'es-AR'  ), Validators.required],
        primerApellido: [this.empleado.primerApellido, Validators.required],
        primerNombre: [this.empleado.primerNombre, Validators.required],
        puesto: [this.empleado.puesto, Validators.required],
        salario: [this.empleado.salario],
        segundoApellido: [this.empleado.segundoApellido],
        segundoNombre: [this.empleado.segundoNombre],
        telefono: [this.empleado.telefono, Validators.required]
      })
    }

  }

  loadPuestos () : void {
    this.empleadosService.listarPuestos().subscribe( (response) =>{ 
      this.listaPuestos = response;
    });
  }

  onEdit(dataForm : any) : void{
    var empleado : Empleados = {
      id : this.empleado.id,
      cedula : this.empleado.cedula,
      primerNombre : dataForm.primerNombre,
      segundoNombre : dataForm.segundoNombre,
      primerApellido : dataForm.primerApellido,
      segundoApellido : dataForm.segundoApellido,
      direccion : dataForm.direccion,
      telefono : dataForm.telefono,
      fechaNacimiento : dataForm.fechaNacimiento,
      correoElectronico : dataForm.correoElectronico,
      fechaIngreso : this.empleado.fechaIngreso,
      puesto : dataForm.puesto,
      salario : dataForm.salario,
      estado : dataForm.estado
    }
    console.log(empleado)
    this.empleadosService.editarEmpleados(empleado).subscribe();
  }

  onCreate(dataForm : any) : void {
    
    var empleado : Empleados = {
      id : 0,
      cedula : dataForm.cedula,
      primerNombre : dataForm.primerNombre,
      segundoNombre : dataForm.segundoNombre,
      primerApellido : dataForm.primerApellido,
      segundoApellido : dataForm.segundoApellido,
      direccion : dataForm.direccion,
      telefono : dataForm.telefono,
      fechaNacimiento : dataForm.fechaNacimiento,
      correoElectronico : dataForm.correoElectronico,
      fechaIngreso : dataForm.fechaIngreso,
      puesto : dataForm.puesto,
      salario : dataForm.salario,
      estado : dataForm.estado
    }

    this.empleadosService.insertarEmpleados(empleado).subscribe();

  }

  onSubmit() : void{
    console.log(this.proceso)

    if(this.formGroup?.valid){
      if(this.proceso === 0 ){
        this.onCreate(this.formGroup.value)
      }else{
        this.onEdit(this.formGroup.value)
      }
    }
  }

}
