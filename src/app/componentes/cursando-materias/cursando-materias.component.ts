import { Component, OnInit, ViewChild } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import {MatTableDataSource} from '@angular/material/table';
import { MateriasAprobadasService } from 'src/app/servicios/materias-aprobadas.service';
import { first } from 'rxjs';
import Swal from 'sweetalert2';
import { ProyeccionMateriasService } from 'src/app/servicios/proyeccion-materias.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';



export interface PeriodicElement {
  Codigo: string;
  Nombre: string;
  Creditos: number;
  Horas: number;
  Matricula:string;
}
@Component({
  selector: 'app-cursando-materias',
  templateUrl: './cursando-materias.component.html',
  styleUrls: ['./cursando-materias.component.css']
})
export class CursandoMateriasComponent implements OnInit {

  displayedColumns: string[] = ['select', 'position', 'Codigo', 'Nombre', 'Creditos', 'Horas'];
  dataSource = new MatTableDataSource<PeriodicElement>();
  selection = new SelectionModel<PeriodicElement>(true, []);

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private proyeccion:ProyeccionMateriasService) {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource();
    
  }

  ngAfterViewInit() { 
    let a=localStorage.getItem('token');
    if(a){
      var aux=JSON.parse(a); 
    }
    this.proyeccion.getProyeccion(aux["matricula"])
    .pipe(first())
    .subscribe(
      data=>{
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
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
    let a=localStorage.getItem('token');
    if(a){
      var aux=JSON.parse(a); 
    }
    this.proyeccion.agregarCursando(JSON.stringify(this.selection.selected),aux['matricula'])
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
          this.ngAfterViewInit();
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
    );
  }
}