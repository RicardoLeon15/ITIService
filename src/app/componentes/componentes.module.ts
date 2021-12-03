import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormLoginComponent } from './form-login/form-login.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MenuAlumnoComponent } from './menu-alumno/menu-alumno.component';
import { MenuAdministradorComponent } from './menu-administrador/menu-administrador.component';
import { ProyecciondeMateriasComponent } from './proyeccionde-materias/proyeccionde-materias.component';
import { FormModificarPerfilAlumnoComponent } from './form-modificar-perfil-alumno/form-modificar-perfil-alumno.component';
import { FormModificarPerfilAdministradorComponent } from './form-modificar-perfil-administrador/form-modificar-perfil-administrador.component';
import { FormAgregarAlumnoComponent } from './form-agregar-alumno/form-agregar-alumno.component';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { BarraNavegacionAlumnoComponent } from './barra-navegacion-alumno/barra-navegacion-alumno.component';
import { AlumnosComponent } from './alumnos/alumnos.component';
import { AprobadasMateriasComponent } from './aprobadas-materias/aprobadas-materias.component';
import { PorCursarMateriasComponent } from './por-cursar-materias/por-cursar-materias.component';
import { CursandoMateriasComponent } from './cursando-materias/cursando-materias.component';
import { MapaComponent } from './mapa/mapa.component';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import {MatSortModule} from '@angular/material/sort'; 
import {MatIconModule} from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';

@NgModule({
  declarations: [
    FormLoginComponent,
    BarraNavegacionComponent,
    MenuAlumnoComponent,
    MenuAdministradorComponent,
    ProyecciondeMateriasComponent,
    FormModificarPerfilAlumnoComponent,
    FormModificarPerfilAdministradorComponent,
    FormAgregarAlumnoComponent,
    FooterComponent,
    BarraNavegacionAlumnoComponent,
    AlumnosComponent,
    AprobadasMateriasComponent,
    PorCursarMateriasComponent,
    CursandoMateriasComponent,
    MapaComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule,
    MatPaginatorModule,
    MatTableModule,
    MatFormFieldModule,
    MatInputModule,
    MatSortModule,
    MatIconModule,
    MatButtonModule,
    MatCheckboxModule
  ],
  exports:[
    FormLoginComponent,
    BarraNavegacionComponent,
    MenuAlumnoComponent,
    FooterComponent,
    MenuAdministradorComponent,
    FormAgregarAlumnoComponent,
    BarraNavegacionAlumnoComponent,
    AlumnosComponent,
    AprobadasMateriasComponent,
    ProyecciondeMateriasComponent,
    PorCursarMateriasComponent,
    CursandoMateriasComponent,
    MapaComponent
  ]
})
export class ComponentesModule { }
