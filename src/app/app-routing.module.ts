import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MateriasCursandoComponent } from './vistas/materias-cursando/materias-cursando.component';
import { AdministradorComponent } from './vistas/administrador/administrador.component';
import { AlumnoComponent } from './vistas/alumno/alumno.component';
import { LoginComponent } from './vistas/login/login.component';
import { ProyeccionMateriasComponent } from './vistas/proyeccion-materias/proyeccion-materias.component';
import { MapaGraficoComponent } from './vistas/mapa-grafico/mapa-grafico.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'Alumno', component: AlumnoComponent},
  {path: 'Administrador', component: AdministradorComponent},
  {path: 'MateriasCursando', component: MateriasCursandoComponent},
  {path: 'ProyeccionMaterias', component: ProyeccionMateriasComponent},
  {path: 'MapaGrafico', component:MapaGraficoComponent},
  {path: '**', pathMatch: 'full' ,redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
