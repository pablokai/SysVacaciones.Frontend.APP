import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { catchError, Observable, map } from 'rxjs';  //Observable para operaciones async 
import { HttpClient } from '@angular/common/http'; //client para requests al api
import { Empleados } from '../interfaces/empleados';

@Injectable({ //decorator Injectable para hacerla injectable en otra clase o componente
  providedIn: 'root' //el provided indica de donde obtiene la dependencia, al indicar root crea una unica singleton y compartida instancia e inyecta donde sea
}) //al llamar servicio angular se encarga de resolver el servicio, el componente donde llama no carga constructor hasta estar resuelto
export class EmpleadosService {

  private apiUrl : string = '';
  constructor(private http : HttpClient,) { 
    this.apiUrl = environment.API_URL;
  }

  listarEmpleados() : Observable<Empleados[]>{ //de tipo empleados[], retorna lista de empleados
    return this.http.get<Empleados[]>(this.apiUrl).pipe( //el pipe es para encadenar operators de rxjs, aqui el map y catch
      map(response => response),
      catchError(error =>[])
    );
  }
}
