import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-barra-navegacion-alumno',
  templateUrl: './barra-navegacion-alumno.component.html',
  styleUrls: ['./barra-navegacion-alumno.component.css']
})
export class BarraNavegacionAlumnoComponent implements OnInit {

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
    this.router.navigate(["/Alumno"])
  }

  Mapa(){
    this.router.navigate(['/MapaGrafico']);
  }

  MateriasAprobadas(){
    this.router.navigate(['/MateriasAprobadas']);
  }

  MateriasPorCursar(){
    this.router.navigate(['/MateriasPorCursar']);
  }

  MateriasCursando(){
    this.router.navigate(['/MateriasCursando']);
  }

  ProyeccionMaterias(){
    this.router.navigate(['/ProyeccionMaterias'])
  }

}
