import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { share } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AgregarAlumnoService {

  baseUrl:string = "http://localhost/ITIServicePHP/AgregarAlumno.php";

  constructor(private http:HttpClient) { }

  AddAlumno(alumno: any){
    return this.http.post<any>(this.baseUrl,JSON.stringify(alumno))
    .pipe(share());
  }
}
