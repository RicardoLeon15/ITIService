import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormLoginComponent } from './form-login/form-login.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuAlumnoComponent } from './menu-alumno/menu-alumno.component';
import { MenuAdministradorComponent } from './menu-administrador/menu-administrador.component';
import { MapaGraficoComponent } from './mapa-grafico/mapa-grafico.component';
import { MateriasAprobadasComponent } from './materias-aprobadas/materias-aprobadas.component';
import { MateriasCursandoComponent } from './materias-cursando/materias-cursando.component';
import { ProyecciondeMateriasComponent } from './proyeccionde-materias/proyeccionde-materias.component';
import { FormModificarPerfilAlumnoComponent } from './form-modificar-perfil-alumno/form-modificar-perfil-alumno.component';
import { FormModificarPerfilAdministradorComponent } from './form-modificar-perfil-administrador/form-modificar-perfil-administrador.component';
import { FormAgregarAlumnoComponent } from './form-agregar-alumno/form-agregar-alumno.component';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    FormLoginComponent,
    BarraNavegacionComponent,
    MenuAlumnoComponent,
    MenuAdministradorComponent,
    MapaGraficoComponent,
    MateriasAprobadasComponent,
    MateriasCursandoComponent,
    ProyecciondeMateriasComponent,
    FormModificarPerfilAlumnoComponent,
    FormModificarPerfilAdministradorComponent,
    FormAgregarAlumnoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  exports:[
    FormLoginComponent,
    BarraNavegacionComponent,
    MenuAlumnoComponent
  ]
})
export class ComponentesModule { }
