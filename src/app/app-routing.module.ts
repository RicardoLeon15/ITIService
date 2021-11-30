import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdministradorComponent } from './vistas/administrador/administrador.component';
import { AlumnoComponent } from './vistas/alumno/alumno.component';
import { LoginComponent } from './vistas/login/login.component';


const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: 'Alumno', component: AlumnoComponent},
  {path: 'Administrador', component: AdministradorComponent},
  {path: '**', pathMatch: 'full' ,redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
