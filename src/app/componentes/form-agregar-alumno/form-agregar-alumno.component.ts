import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs';
import { AgregarAlumnoService } from 'src/app/servicios/agregar-alumno.service';
import Swal from 'sweetalert2';

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

  constructor(private formbuilder:FormBuilder,private addAlumnoS:AgregarAlumnoService) {
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
     if(this.Validar.invalid || this.Alumno.carrera == ""){
       return;
     }
     this.Alumno.contrasenia = this.Alumno.matricula;
     this.addAlumnoS.AddAlumno(this.Alumno)
     .pipe(first())
     .subscribe(
       data=>{
         console.log(data);
         if(data){
          Swal.fire({
            icon: 'success',
            title: 'Alumno Agregado',
            text: 'El alumno ha sido agregado exitosamente.',
            confirmButtonText: 'Aceptar'
          });
          this.Limpiar();
         }
         else{
          Swal.fire({
            icon: 'error',
            title: 'Alumno no registrado',
            text: 'El alumno no pudo ser registrado.',
            confirmButtonText: 'Aceptar'
          });
         }
       }
     );
   }

   Limpiar(){
     this.submitted=false;
     this.Validar.reset();
   }
   onCarrera(e: any) {
    console.log(e.target.value);
    this.Alumno.carrera = e.target.value;
  }
}
