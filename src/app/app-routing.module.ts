import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MateriasCursandoComponent } from './vistas/materias-cursando/materias-cursando.component';
import { AdministradorComponent } from './vistas/administrador/administrador.component';
import { AlumnoComponent } from './vistas/alumno/alumno.component';
import { LoginComponent } from './vistas/login/login.component';
import { ProyeccionMateriasComponent } from './vistas/proyeccion-materias/proyeccion-materias.component';
import { MapaGraficoComponent } from './vistas/mapa-grafico/mapa-grafico.component';
import { AgregarAlumnoComponent } from './vistas/agregar-alumno/agregar-alumno.component';
import { ListaAlumnosComponent } from './vistas/lista-alumnos/lista-alumnos.component';
import { MateriasAprobadasComponent } from './vistas/materias-aprobadas/materias-aprobadas.component';
import { MateriasPorCursarComponent } from './vistas/materias-por-cursar/materias-por-cursar.component';
import { AnalisisMateriasComponent } from './vistas/analisis-materias/analisis-materias.component';
import { AnalisisMateriasPorCursarComponent } from './vistas/analisis-materias-por-cursar/analisis-materias-por-cursar.component';



const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'Alumno', component: AlumnoComponent},
  {path: 'Administrador', component: AdministradorComponent},
  {path: 'MateriasCursando', component: MateriasCursandoComponent},
  {path: 'ProyeccionMaterias', component: ProyeccionMateriasComponent},
  {path: 'MapaGrafico', component:MapaGraficoComponent},
  {path: 'AgregarAlumno',component:AgregarAlumnoComponent},
  {path: 'ListaAlumnos', component: ListaAlumnosComponent},
  {path: 'MateriasAprobadas', component: MateriasAprobadasComponent},
  {path: 'MateriasPorCursar', component: MateriasPorCursarComponent},
  {path: 'AnalisisMaterias',component:AnalisisMateriasComponent},
  {path: 'AnalisisMateriasPorCursar', component:AnalisisMateriasPorCursarComponent},
  {path: '**', pathMatch: 'full' ,redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
