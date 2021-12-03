import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProyeccionMateriasService {

  constructor(private cliente: HttpClient) { 

    
  }

  getProyeccion(matricula: any)
  {
   return this.cliente.post<any>("http://localhost/ITIServicePHP/proyeccionMaterias.php",{matricula:matricula})
   .pipe(map(
     proyeccion=>{return proyeccion;}
   ));
  }
}
