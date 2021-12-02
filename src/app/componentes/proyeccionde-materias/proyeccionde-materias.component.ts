import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-proyeccionde-materias',
  templateUrl: './proyeccionde-materias.component.html',
  styleUrls: ['./proyeccionde-materias.component.css']
})
export class ProyecciondeMateriasComponent implements OnInit {

  matricula:string;

  constructor() {
    let a = localStorage.getItem('token');
    if(a){
      var aux = JSON.parse(a);
    }
    this.matricula = aux['matricula'];
   }

  ngOnInit(): void {
  }

}
