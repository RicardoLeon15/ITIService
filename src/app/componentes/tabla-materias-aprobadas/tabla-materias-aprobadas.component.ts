import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { first } from 'rxjs';
import { TablaMateriasService } from 'src/app/servicios/tabla-materias.service';

export interface Materia {
  Codigo: string;
  Nombre: string;
  Creditos: string;
  Horas: string;
  Alumnos: string;
}

@Component({
  selector: 'app-tabla-materias-aprobadas',
  templateUrl: './tabla-materias-aprobadas.component.html',
  styleUrls: ['./tabla-materias-aprobadas.component.css']
})
export class TablaMateriasAprobadasComponent implements OnInit {

  displayedColumns: string[] = ['codigo', 'nombre', 'creditos', 'horas', 'alumnos'];
  dataSource: MatTableDataSource<Materia>;

  @ViewChild(MatPaginator)
  paginator!: MatPaginator;
  @ViewChild(MatSort)
  sort!: MatSort;

  constructor(private aprobadas:TablaMateriasService) {
    this.dataSource = new MatTableDataSource();
   }

   ngAfterViewInit() { 
    this.aprobadas.getMateriasAprobadas()
    .pipe(first())
    .subscribe(
      data=>{
        console.log(data);
        this.dataSource = new MatTableDataSource(data);
        this.dataSource.paginator = this.paginator;
        this.dataSource.sort = this.sort;
      }
    )
  }

  ngOnInit(): void {
  }

  applyFilter(event: Event) {
    console.log("entro");
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

}
