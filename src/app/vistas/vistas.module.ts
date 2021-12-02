import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { AlumnoComponent } from './alumno/alumno.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { ProyeccionMateriasComponent } from './proyeccion-materias/proyeccion-materias.component';
import { MateriasCursandoComponent } from './materias-cursando/materias-cursando.component';
import { MapaGraficoComponent } from './mapa-grafico/mapa-grafico.component';
import { AgregarAlumnoComponent } from './agregar-alumno/agregar-alumno.component';
import { ListaAlumnosComponent } from './lista-alumnos/lista-alumnos.component';
import { MateriasAprobadasComponent } from './materias-aprobadas/materias-aprobadas.component';
import { MateriasPorCursarComponent } from './materias-por-cursar/materias-por-cursar.component';

@NgModule({
  declarations: [
    LoginComponent,
    AlumnoComponent,
    AdministradorComponent,
    ProyeccionMateriasComponent,
    MateriasCursandoComponent,
    MapaGraficoComponent,
    AgregarAlumnoComponent,
    ListaAlumnosComponent,
    MateriasAprobadasComponent,
    MateriasPorCursarComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule
  ],
  exports: [
  ]
})
export class VistasModule { }
