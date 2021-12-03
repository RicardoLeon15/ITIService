import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-navegacion',
  templateUrl: './barra-navegacion.component.html',
  styleUrls: ['./barra-navegacion.component.css']
})
export class BarraNavegacionComponent implements OnInit {

  isCollapse = true;
  Nombre:string|null;

    toggleState(): void {
        let foo = this.isCollapse;
        this.isCollapse = foo === false ? true : false; 
    }

  constructor(private router:Router) {
    let a=localStorage.getItem('token');
    if(a){
      var aux=JSON.parse(a); 
    }
    this.Nombre = aux["nombre"];
   }

  ngOnInit(): void {
  }

  CerrarSesion(){
    localStorage.removeItem('token');
    const redirect="/login";
    this.router.navigate([redirect]);
  }

  Inicio(){
    this.router.navigate(["/Administrador"]);
  }

  VerAlumnos(){
    this.router.navigate(['/ListaAlumnos']);
  }

  AnadirAlumnos(){
    this.router.navigate(['/AgregarAlumno']);
  }

  AnalisisMaterias(){
    this.router.navigate(['/AnalisisMaterias']);
  }

  AnalisisMateriasPorCursar(){
    this.router.navigate(['/AnalisisMateriasPorCursar']);
  }

}
