import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form-login',
  templateUrl: './form-login.component.html',
  styleUrls: ['./form-login.component.css']
})
export class FormLoginComponent implements OnInit {

  autenticarse: FormGroup;
  submitted=false;
  login = {
    matricula: null,
    password: null
  };

  constructor(private formBuilder:FormBuilder) { 
    this.autenticarse = this.formBuilder.group({
      matricula:['',[Validators.required,Validators.minLength(9)]],
      password:['',[Validators.required,Validators.minLength(9)]]
    });
  }

  ngOnInit(): void {
  }

  get f(){ 
    return this.autenticarse.controls;
  }
}
