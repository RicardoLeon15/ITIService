import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-administrador',
  templateUrl: './menu-administrador.component.html',
  styleUrls: ['./menu-administrador.component.css']
})
export class MenuAdministradorComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit(): void {
  }

  AgregarAlumnobtn(){
    const redirect="/AgregarAlumno";
    this.router.navigate([redirect]);
  }

  ListaAlumnosbtn(){
    this.router.navigate(['/ListaAlumnos']);
  }

  VerMaterias(){
    this.router.navigate(['/MateriasAprobadas']);
  }

  VerMateriasCursar(){
    this.router.navigate(['/MateriasPorCursar']);
  }
}
