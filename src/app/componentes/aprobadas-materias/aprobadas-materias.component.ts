import { Component, OnInit } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import { MateriasAprobadasService } from 'src/app/servicios/materias-aprobadas.service';
import { first } from 'rxjs';
import Swal from 'sweetalert2';



export interface PeriodicElement {
  Codigo: string;
  Nombre: string;
  Creditos: number;
  Horas: number;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {Codigo: 'CCOS 260', Nombre: 'Redes de Computadora', Creditos: 6, Horas: 90},
  {Codigo: 'FGUS 001', Nombre: 'Formacion Humana y Social', Creditos: 4, Horas: 72},
  {Codigo: 'FGUS 002', Nombre: 'DHPC', Creditos: 4, Horas: 72},
  {Codigo: 'FGUS 004', Nombre: 'Lengua Extranjera I', Creditos: 4, Horas: 72},
  {Codigo: 'FGUS 006', Nombre: 'Lengua Extranjera III', Creditos: 4, Horas: 72},
  {Codigo: 'IDDS 001', Nombre: 'Administracion de Proyectos', Creditos: 5, Horas: 72},
]


@Component({
  selector: 'app-aprobadas-materias',
  templateUrl: './aprobadas-materias.component.html',
  styleUrls: ['./aprobadas-materias.component.css']
})
export class AprobadasMateriasComponent implements OnInit {

  displayedColumns: string[] = ['select', 'position', 'Codigo', 'Nombre', 'Creditos', 'Horas'];
  dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);
  selection = new SelectionModel<PeriodicElement>(true, []);

  constructor(private listaser:MateriasAprobadasService) {
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
    this.listaser.getListaCursando(parseInt(Matricula.matricula))
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
    
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${7}`;
  }


  ngOnInit(): void {
  }
  
  EnviarDatos(){
    this.listaser.agregarAprobadas(JSON.stringify(this.selection.selected))
    .pipe(first())
    .subscribe(
      data=>{
        if(data){
          Swal.fire({
            icon:'success',
            title:'Exito',
            text:'Las materias han sido actualizdas',
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
