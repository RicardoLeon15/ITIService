import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-agregar-alumno',
  templateUrl: './form-agregar-alumno.component.html',
  styleUrls: ['./form-agregar-alumno.component.css']
})
export class FormAgregarAlumnoComponent implements OnInit {

  Validar:FormGroup;
  submitted=false;
  Alumno={
    matricula:null,
    contrasenia:null,
    nombre:null,
    paterno:null,
    materno:null,
    carrera:null
  }

  constructor(private formbuilder:FormBuilder) {
    this.Validar = this.formbuilder.group({
      matricula:['',[Validators.required,Validators.minLength(9)]],
      nombre:['',Validators.required],
      paterno:['',Validators.required],
      materno:['',Validators.required]
    });
   }

  ngOnInit(): void {
  }
   get f(){
     return this.Validar.controls;
   }

   AddAlumno(){
     this.submitted=true;
     if(this.Validar.invalid){
       return;
     }
   }
}
