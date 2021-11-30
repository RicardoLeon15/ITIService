import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { first } from 'rxjs';
import { LoginService } from 'src/app/servicios/login.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  autenticarse = this.formBuilder.group({
    matricula:['',[Validators.required,Validators.minLength(9)]],
    password:['',[Validators.required,Validators.minLength(9)]]
  });
  submitted=false;
  login = {
    matricula: null,
    password: null
  };

  constructor(private formBuilder:FormBuilder,private LoginServicio:LoginService,private router:Router,
              private http:HttpClient) { 
    
  }

  ngOnInit(): void { 
  }

  get f(){ 
    return this.autenticarse.controls;
  }

  Autenticarse():void{
    this.submitted=true;
    if(this.autenticarse.invalid){
      return;
    }
    this.LoginServicio.VerificarDatos(this.autenticarse.value.matricula,this.autenticarse.value.password)
    .pipe(first())
    .subscribe(
      data =>{
        console.log(data[0]);
        if(data[0].contrasenia==""){
          Swal.fire({  
            icon: 'error',  
            title: 'Contraseña incorrecta',  
            text: 'La contraseña que se introdujo es incorrecta.',  
            confirmButtonText:'Aceptar'  
          })  
        }
        else{
          if(data[0].tipo=="Alumno"){
            const redirect=this.LoginServicio.redirectUrl ? this.LoginServicio.redirectUrl: '/Alumno';
            this.router.navigate([redirect]);
          }
          else if(data[0].tipo=="Administrador"){
            const redirect=this.LoginServicio.redirectUrl ? this.LoginServicio.redirectUrl: '/Administrador';
            this.router.navigate([redirect]);
          }
          
        }
      },
      error => {
        Swal.fire({  
          icon: 'error',  
          title: 'Usuario no registrado',  
          text: 'La matricula no esta registrada en ITIService.',  
          confirmButtonText:'Aceptar'  
        })  
      }
    );
  }
}
