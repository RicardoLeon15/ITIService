import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormLoginComponent } from './form-login/form-login.component';
import { BarraNavegacionComponent } from './barra-navegacion/barra-navegacion.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    FormLoginComponent,
    BarraNavegacionComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    FormLoginComponent,
    BarraNavegacionComponent
  ]
})
export class ComponentesModule { }
