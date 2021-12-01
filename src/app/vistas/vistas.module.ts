import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { AlumnoComponent } from './alumno/alumno.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { ProyeccionMateriasComponent } from './proyeccion-materias/proyeccion-materias.component';
import { MateriasCursandoComponent } from './materias-cursando/materias-cursando.component';

@NgModule({
  declarations: [
    LoginComponent,
    AlumnoComponent,
    AdministradorComponent,
    ProyeccionMateriasComponent,
    MateriasCursandoComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule
  ],
  exports: [
  ]
})
export class VistasModule { }
