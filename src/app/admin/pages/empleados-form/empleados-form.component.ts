import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-empleados-form',
  templateUrl: './empleados-form.component.html',
  styleUrl: './empleados-form.component.css'
})
export class EmpleadosFormComponent {

  private proceso : any ;
  private id : any ;
  public titulo : string  = '';
  public btnTexto : string = '';
  constructor(private router : Router, private route : ActivatedRoute){} //no se igualan properties


  ngOnInit(): void {
   
    const response : any = history.state;

    this.proceso = response['proceso'];
    
    this.id = this.proceso == 1 ?  response['id'] : '' ;

    this.titulo = this.proceso===0 ? 'Registro de Empleados' : 'Edición de Empleados';
    this.btnTexto = this.proceso===0 ? 'Insertar' : 'Editar';

    console.log(this.proceso, this.id);
  }
}
