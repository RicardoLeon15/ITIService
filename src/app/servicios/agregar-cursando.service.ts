import { HttpClient } from '@angular/common/http';
import { ValueConverter } from '@angular/compiler/src/render3/view/template';
import { Injectable } from '@angular/core';
import { MatRipple } from '@angular/material/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgregarCursandoService {

  constructor(private cliente: HttpClient) { 

    
  }

  getProyeccion(matricula: any)
  {
   return this.cliente.post<any>("http://localhost/ITIServicePHP/proyeccionMaterias.php",{matricula:matricula})
   .pipe(map(
     proyeccion=>{return proyeccion;}
   ));
   }
  cargarCambios(matricula: any,checkbox:ValueConverter)
  {
   return this.cliente.post<any>("http://localhost/ITIServicePHP/materiasCursando.php",{matricula:matricula})
   .pipe(map(
     proyeccion=>{return proyeccion;}
   ));
  }
}
