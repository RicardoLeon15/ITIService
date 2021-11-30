import { Component, OnInit } from '@angular/core';

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

  constructor() {
    let a=localStorage.getItem('token');
    if(a){
      var aux=JSON.parse(a); 
    }
    this.Nombre = aux["nombre"];
   }

  ngOnInit(): void {
  }

}
