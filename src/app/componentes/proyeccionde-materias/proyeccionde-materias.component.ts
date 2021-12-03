import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-proyeccionde-materias',
  templateUrl: './proyeccionde-materias.component.html',
  styleUrls: ['./proyeccionde-materias.component.css']
})
export class ProyecciondeMateriasComponent implements OnInit {

  Matricula;

  constructor(private router:Router) {
    let a = localStorage.getItem('token');
    if(a){
      var aux = JSON.parse(a);
    }
    this.Matricula = aux;
   }

  ngOnInit(): void {
  }

}
