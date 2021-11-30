import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { ComponentesModule } from '../componentes/componentes.module';
import { AlumnoComponent } from './alumno/alumno.component';
import { AdministradorComponent } from './administrador/administrador.component';

@NgModule({
  declarations: [
    LoginComponent,
    AlumnoComponent,
    AdministradorComponent
  ],
  imports: [
    CommonModule,
    ComponentesModule
  ],
  exports: [
  ]
})
export class VistasModule { }
