import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor(private Ruta: Router) { }

  ngOnInit(): void {
  }

  ProyeccionMaterias(){
    this.Ruta.navigate(['/ProyeccionMaterias']);
  }

  MapaGrafico(){
    this.Ruta.navigate(['/MapaGrafico']);
  }

  MateriasCursando(){
    this.Ruta.navigate(['/MateriasCursando']);
  }

  MateriasAprobadas(){
    this.Ruta.navigate(['/MateriasAprobadas']);
  }

  MateriasPorCursar(){
    this.Ruta.navigate(['/MateriasPorCursar'])
  }

}
