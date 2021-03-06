import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { first } from 'rxjs';
import { ListaAlumnosService } from 'src/app/servicios/lista-alumnos.service';
import Swal from 'sweetalert2';

export interface Alumno {
  Matricula: string;
  Nombre: string;
  Paterno: string;
  Materno: string;
  Carrera: string;
}

@Component({
  selector: 'app-alumnos',
  templateUrl: './alumnos.component.html',
  styleUrls: ['./alumnos.component.css']
})
export class AlumnosComponent implements OnInit {

  displayedColumns: string[] = ['matricula', 'nombre', 'carrera', 'accion'];
  dataSource: MatTableDataSource<Alumno>;
  list: any[] | undefined;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private listaser:ListaAlumnosService) {
    // Assign the data to the data source for the table to render
    this.dataSource = new MatTableDataSource();
    
  }

  ngAfterViewInit() { 
    this.listaser.getListaAlumnos()
    .pipe(first())
    .subscribe(
      data=>{
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    )
  }

  applyFilter(event: Event) {
    console.log("entro");
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  ngOnInit(): void {
  }

  Eliminar(matricula: any){
    Swal.fire({
      title: 'Eliminar Alumno',
      text: "Deseas eliminar el registro de esta alumno.",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Sí, borrar registro.'
    }).then((result) => {
      if (result.isConfirmed) {
        this.listaser.deleteAlumno(matricula)
    .pipe(first())
    .subscribe(
      data=>{
        if(data){
          Swal.fire({
            icon:'success',
            title:'Alumno eliminado',
            text:'El alumno ha sido eliminado.',
            confirmButtonText:'Aceptar'
          });
          this.ngAfterViewInit();
        }
        else{
          Swal.fire({
            icon: 'error',
            title:'Error',
            text: 'El alumno no fue eliminado.',
            confirmButtonText: 'Aceptar'
          });
        }
      }
    );
      }
    });
  }

}
