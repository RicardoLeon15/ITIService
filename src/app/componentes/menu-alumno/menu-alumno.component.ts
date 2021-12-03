import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu-alumno',
  templateUrl: './menu-alumno.component.html',
  styleUrls: ['./menu-alumno.component.css']
})
export class MenuAlumnoComponent implements OnInit {

  constructor(private Ruta: Router) {

  }

  MapaGrafico() {
    this.Ruta.navigate(['/MapaGrafico']);	
    window.scrollTo(0, 0)
  } 
  ngOnInit(): void {
  }

}
