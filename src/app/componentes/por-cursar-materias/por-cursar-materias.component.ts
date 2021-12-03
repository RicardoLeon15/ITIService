import { Component, OnInit } from '@angular/core';
import { SelectionModel } from '@angular/cdk/collections';
import { MatTableDataSource } from '@angular/material/table';
import { ServiciosService } from 'src/app/servicios.service';
import { first } from 'rxjs';

import Swal from 'sweetalert2';
import { ProyeccionMateriasService } from 'src/app/servicios/proyeccion-materias.service';

export interface PeriodicElement {
  Codigo: string;
  Nombre: string;
  Creditos: number;
  Horas: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  { Codigo: 'ITIS 259', Nombre: 'Diseño de la interación', Creditos: 6, Horas: 90 },
  { Codigo: 'ITIS 258', Nombre: 'Mineria de Datos', Creditos: 6, Horas: 90 },
  { Codigo: 'ITIS 261', Nombre: 'Control de Calidad de Software', Creditos: 6, Horas: 72 },
  { Codigo: 'ITIS 601', Nombre: 'Cóputo Orientado a Objetos', Creditos: 4, Horas: 72 },
  { Codigo: 'ITIS 255', Nombre: 'Tecnologias Web', Creditos: 6, Horas: 90 },
  { Codigo: 'ITIS 606', Nombre: 'Aprendizaje Artificial', Creditos: 6, Horas: 90 },
  { Codigo: 'ITIS 604', Nombre: 'Intelicia Artificial', Creditos: 6, Horas: 90 },
  { Codigo: 'ITIS 603', Nombre: 'Ingenieria de Conocimiento', Creditos: 6, Horas: 90 },
  { Codigo: 'ITIS 260', Nombre: 'Servios Web', Creditos: 6, Horas: 90 },
  { Codigo: 'ITIS 611', Nombre: 'Arquitectura de Software', Creditos: 6, Horas: 90 },
]


@Component({
  selector: 'app-por-cursar-materias',
  templateUrl: './por-cursar-materias.component.html',
  styleUrls: ['./por-cursar-materias.component.css']
})
export class PorCursarMateriasComponent implements OnInit {

  displayedColumns: string[] = ['select', 'position', 'Codigo', 'Nombre', 'Creditos', 'Horas'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  constructor(private listaser:ServiciosService,private pro:ProyeccionMateriasService) {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource();
    
  }

  ngAfterViewInit() { 
    let a = localStorage.getItem('token');
    if(a){
      var aux = JSON.parse(a);
    }
    let Matricula = aux;
    console.log(Matricula);
    this.pro.getProyeccion(aux["matricula"])
    .pipe(first())
    .subscribe(
      data=>{
        this.dataSource = new MatTableDataSource(data);
      }
    )
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.dataSource.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    if (this.isAllSelected()) {
      this.selection.clear();
      return;
    }

    this.selection.select(...this.dataSource.data);
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: PeriodicElement): string {
    if (!row) {
      return `${this.isAllSelected() ? 'deselect' : 'select'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${10}`;
  }

  ngOnInit(): void {
  }

EnviarDatos(){
  this.listaser.agregarPorCursar(JSON.stringify(this.selection.selected))
    .pipe(first())
    .subscribe(
      data=>{
        if(data){
          Swal.fire({
            icon:'success',
            title:'Exito',
            text:'Se han enviado sus materias con exito',
            confirmButtonText:'Aceptar'
          });
          //this.ngAfterViewInit();
        }
        else{
          Swal.fire({
            icon: 'error',
            title:'Error',
            text: 'No se pudo actualizar las materias',
            confirmButtonText: 'Aceptar'
          });
        }
      }
    )

  }


}


