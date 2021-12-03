import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, share } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ListaAlumnosService {

  baseUrl="http://localhost/ITIServicePHP/";

  constructor(private http:HttpClient) { }

  getListaAlumnos(){
    return this.http.get<any>(this.baseUrl+"ListaAlumnos.php")
    .pipe(map(Alumnos=>{
      return Alumnos;
    }));
  }

  deleteAlumno(matricula: any){
    console.log(matricula);
    return this.http.post<any>(this.baseUrl+"EliminarAlumno.php",{matricula:matricula})
    .pipe(share());
  }

}
