import {AfterViewInit, Component, ViewChild, OnInit} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { first } from 'rxjs';
import { ListaAlumnosService } from 'src/app/servicios/lista-alumnos.service';
import { ProyeccionMateriasService } from 'src/app/servicios/proyeccion-materias.service';
import { MateriasAprobadasComponent } from 'src/app/vistas/materias-aprobadas/materias-aprobadas.component';

export interface UserData {
  CodigoPre: string;
  Codigo: string;
  Nombre: string;

}

@Component({
  selector: 'app-proyeccionde-materias',
  templateUrl: './proyeccionde-materias.component.html',
  styleUrls: ['./proyeccionde-materias.component.css']
})
export class ProyecciondeMateriasComponent implements OnInit {


  displayedColumns: string[] = ['matricula', 'nombre', 'carrera', 'accion'];
  dataSource: MatTableDataSource<UserData>;
  list: any[] | undefined;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private proyeccion:ProyeccionMateriasService) {
    // Create 100 users
     
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
        console.log(data);
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

}

